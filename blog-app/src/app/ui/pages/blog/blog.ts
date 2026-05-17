import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { BLOG_CARD_STORE } from '../../../services/blog-card-store/blog-card-store.token';
import { BLOG_CARD_REPOSITORY } from '../../../services/blog-card-repository/blog-card-repository.token';
import { ActivatedRoute } from '@angular/router';
import { BlogCardStore } from '../../../services/blog-card-store/blog-card-store';
import { BlogCardRepository } from '../../../services/blog-card-repository/blog-card-repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComment } from '../../components/card-comment/card-comment';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentModal } from '../../components/modals/add-comment-modal/add-comment-modal';
import { Title } from '@angular/platform-browser';
import { InputRating } from '../../components/inputs/input-rating/input-rating';
import { environment } from '../../../../environments/environment';
import { BlogCardRepositoryLc } from '../../../services/blog-card-repository/blog-card-repository-lc';

@Component({
  selector: 'app-blog',
  imports: [MatButtonModule, MatIconModule, CardComment, InputRating],
  templateUrl: 'blog.html',
  styleUrl: 'blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BLOG_CARD_STORE, useClass: BlogCardStore },
    { provide: BLOG_CARD_REPOSITORY, useClass: environment.useServiceLc ? BlogCardRepositoryLc : BlogCardRepository },
  ]
})
export class Blog { 
  //-----INJECTS-----\\
  private blogStore = inject(BLOG_CARD_STORE);
  private blogRepository = inject(BLOG_CARD_REPOSITORY);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private titlePage = inject(Title);

  //-----SIGNALS-----\\
  protected blogId = signal<number>(1);
  protected blog = this.blogStore.blog;
  protected comments = this.blogStore.comments;
  protected countComments = this.blogStore.countComments;
  protected limitActiveComments = this.blogStore.limitActiveComments;
  protected isEdit = signal<boolean>(false);
  protected isDisabled = this.blogStore.isDisabled;

  //-----METHODS-----\\
  constructor() {
    this.activatedRoute.params
      .pipe(
        map((params) => Number(params['id'])),
        tap((id: number) => {
	        this.blogId.set(id);
	      }),
        switchMap((id: number) => {
		      return this.blogRepository.getBlog(id);
	      }),
        catchError((error: string) => {
          return throwError(() => new Error(error));
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.titlePage.setTitle(this.blog().title);
      });
  }

  protected editRating(e: number) {
    this.blogRepository.updateRatingBlog(this.blogId(), e)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((blog) => {
        this.blogStore.updateBlog(blog);
      });
  }

  protected addComment() {
    const dialogRef = this.dialog.open(AddCommentModal, {
      data: {
        isDisabled: this.blogStore.isDisabled
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }

        let observer = this.blogRepository.addComment({
            id: 1,
            date: new Date(),
            name: result.name ?? '',
            text: result.text ?? '',
            rating: 0,
            blogId: this.blogId()
        })

        observer
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((comments) => {
            this.blogStore.updateComments(this.blogRepository.getCommentsBlog(this.blogId(), false, comments));
          });
      });
  }

  protected getMore() {
    const blogsComments = this.blogRepository.getCommentsBlog(this.blogId(), true);
    this.blogStore.updateComments(blogsComments);
  }
}
