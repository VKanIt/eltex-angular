import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { BLOG_STORE } from '../../../services/blog-store/blog-store.token';
import { BLOG_REPOSITORY } from '../../../services/blog-repository/blog-repository.token';
import { ActivatedRoute } from '@angular/router';
import { BlogStore } from '../../../services/blog-store/blog-store';
import { BlogRepository } from '../../../services/blog-repository/blog-repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, throwError } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComment } from '../../components/card-comment/card-comment';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentModal } from '../../components/modals/add-comment-modal/add-comment-modal';
import { Title } from '@angular/platform-browser';
import { InputRating } from '../../components/inputs/input-rating/input-rating';

@Component({
  selector: 'app-blog',
  imports: [MatButtonModule, MatIconModule, CardComment, InputRating],
  templateUrl: 'blog.html',
  styleUrl: 'blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BLOG_STORE, useClass: BlogStore },
    { provide: BLOG_REPOSITORY, useClass: BlogRepository },
  ]
})
export class Blog { 
  //-----INJECTS-----\\
  private blogStore = inject(BLOG_STORE);
  private blogRepository = inject(BLOG_REPOSITORY);
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
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.blogId.set(Number(params['id']));
      });

    this.blogRepository.getBlog(this.blogId())
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError((error: string) => {
          return throwError(() => new Error(error));
        })
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
    this.blogStore.updateComments(this.blogRepository.getCommentsBlog(this.blogId(), true));
  }
}
