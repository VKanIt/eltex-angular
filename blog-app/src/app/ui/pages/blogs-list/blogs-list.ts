import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PutBlogModal } from '../../components/modals/put-blog-modal/put-blog-modal';
import { StatisticBlogsModal } from '../../components/modals/statistic-blogs-modal/statistic-blogs-modal';
import { CardBlog } from '../../components/card-blog/card-blog';
import { BLOGS_REPOSITORY } from '../../../services/blogs-repository/blogs-repository.token';
import { BLOGS_STORE } from '../../../services/blogs-store/blogs-store.token';
import { Blog } from '../../../types/Blog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-blogs-list',
  imports: [CardBlog, MatIcon],
  templateUrl: 'blogs-list.html',
  styleUrl: 'blogs-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsList {
  //-----INJECTS-----\\
  private readonly dialog = inject(MatDialog);
  private blogsRepository = inject(BLOGS_REPOSITORY);
  private blogsStore = inject(BLOGS_STORE);
  private destroyRef = inject(DestroyRef);

  //-----SIGNALS-----\\
  protected isLoad = this.blogsStore.isLoad;
  protected blogs = this.blogsStore.blogs;
  protected count = this.blogsStore.count;
  protected limitActive = this.blogsStore.limitActive;
  
  //-----METHODS-----\\
  constructor() {
    this.blogsRepository.getBlogs(false, 7);
  }

  protected openModalAddBlog() {
    const dialogRef = this.dialog.open(PutBlogModal, {
      data: {
        isDisabled: this.blogsStore.isDisabled
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }

        let observer = this.blogsRepository.addBlog({
            id: 1,
            date: new Date(),
            title: result.title ?? '',
            text: result.text ?? '',
            image: null,
            rating: 0,
        })

        observer
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((blogs: Blog[]) => {
            this.blogsStore.count.update((val) => val + 1);
            this.blogsStore.updateBlogs(blogs.slice(0, this.blogsStore.limitActive()));
          });
      });
  }
  
  protected openModalStatisticBlogs() {
    this.dialog.open(StatisticBlogsModal, {
      data: {
        countBlogs: this.blogsStore.count(),
        countComments: this.blogsRepository.getCountComments()
      },
    });
  }

  protected deleteBlog(index: number) {
    this.blogsRepository.deleteBlog(index)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((blogs: Blog[]) => {
        this.blogsStore.count.update((val) => val - 1);
        this.blogsStore.updateBlogs(blogs.slice(0, this.blogsStore.limitActive()));
      });
  }

  protected getMore() {
    this.blogsRepository.getBlogs(true);
  }

  protected openModalEditBlog(index: number, event: any) {
    const dialogRef = this.dialog.open(PutBlogModal, {
      data: {
        title: event.title,
        text: event.text,
        isEdit: true,
        isDisabled: this.blogsStore.isDisabled
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }

        let observer = this.blogsRepository.editBlog({
          title: result.title ?? '',
          text: result.text ?? '',
        }, index ?? 1)

        observer
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((blogs: Blog[]) => {
            this.blogsStore.count.update((val) => val + 1);
            this.blogsStore.updateBlogs(blogs.slice(0, this.blogsStore.limitActive()));
          });
      });
  }
}
