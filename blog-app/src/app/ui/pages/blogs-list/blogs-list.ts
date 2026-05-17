import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PutBlogModal } from '../../components/modals/put-blog-modal/put-blog-modal';
import { StatisticBlogsModal } from '../../components/modals/statistic-blogs-modal/statistic-blogs-modal';
import { CardBlog } from '../../components/card-blog/card-blog';
import { BLOGS_REPOSITORY } from '../../../services/blogs-repository/blogs-repository.token';
import { BLOGS_STORE } from '../../../services/blogs-store/blogs-store.token';
import { Blog } from '../../../types/Blog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIcon } from "@angular/material/icon";
import { MatSnackBar } from '@angular/material/snack-bar';
import { CATEGORIES_REPOSITORY } from '../../../services/categories-repository/categories-repository.token';
import { Category } from '../../../types/Category';
import { ENV_CONF } from '../../../../environments/enviroment.token';

@Component({
  selector: 'app-blogs-list',
  imports: [CardBlog, MatIcon],
  templateUrl: 'blogs-list.html',
  styleUrl: 'blogs-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsList {
  //-----INJECTS-----\\
  private snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  private blogsRepository = inject(BLOGS_REPOSITORY);
  private blogsStore = inject(BLOGS_STORE);
  private categoriesRepository = inject(CATEGORIES_REPOSITORY);
  private destroyRef = inject(DestroyRef);
  private enviroment = inject(ENV_CONF);

  //-----SIGNALS-----\\
  protected isLoad = this.blogsStore.isLoad;
  protected blogs = this.blogsStore.blogs;
  protected count = this.blogsStore.count;
  protected limitActive = this.blogsStore.limitActive;
  protected categories = signal<Category[]>([]);
  
  //-----METHODS-----\\
  constructor() {
    if (this.enviroment.production) {
      this.categoriesRepository.getCategories()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((data: Category[]) => {
          this.categories.set(data);
        });
    }
    
    this.blogsRepository.getBlogs(false, 7);
  }

  protected openModalAddBlog() {
    const dialogRef = this.dialog.open(PutBlogModal, {
      data: {
        isDisabled: this.blogsStore.isDisabled,
        categories: this.categories
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }

        if (result.category === '' || result.category === null || result.category === undefined || typeof result.category === 'object') {
          this.putBlog(result, result.category === '' || result.category === undefined ? null : result.category);
          
        } else if (typeof result.category === 'string') {
          this.categoriesRepository.addCategory(result.category)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
              error: (message: string) => {
                this.snackBar.open(message);
              },
              next: (category: Category) => {
                this.categories.update((val) => {
                  val.push(category);

                  return val;
                });

                this.putBlog(result, category);
              }
            });
        }
      });
  }

  protected openModalEditBlog(index: number, id: string|number, event: any) {
    const dialogRef = this.dialog.open(PutBlogModal, {
      data: {
        title: event.title,
        text: event.text,
        image: event.image,
        categoryId: event.categoryId,
        isEdit: true,
        isDisabled: this.blogsStore.isDisabled,
        categories: this.categories
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }

        if (result.category === '' || result.category === null || result.category === undefined || typeof result.category === 'object') {
          this.putBlog(result, result.category === '' || result.category === undefined ? null : result.category, index, id);
          
        } else if (typeof result.category === 'string') {
          this.categoriesRepository.addCategory(result.category)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
              error: (message: string) => {
                this.snackBar.open(message);
              },
              next: (category: Category) => {
                this.categories.update((val) => {
                  val.push(category);

                  return val;
                });

                this.putBlog(result, category, index, id);
              }
            });
        }
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

  protected deleteBlog(index: number, id: string|number) {
    this.blogsRepository.deleteBlog(index, id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: (message: string) => {
          this.snackBar.open(message);
        },
        next: (blogs: Blog[]|null) => {
          this.blogsStore.count.update((val) => val - 1);
          if (blogs !== null) {
            this.blogsStore.updateBlogs(blogs);
          }
          this.snackBar.open('Статья удалена');
        }
      });
  }

  protected getMore() {
    this.blogsRepository.getBlogs(true);
  }

  private putBlog(result: any, newCategory: Category|null = null, index: number|null = null, id: string|number|null = null): void {
    let observer;
    const categoryId = newCategory?.id??null;

    if (id !== null) {
      observer = this.blogsRepository.editBlog({
        title: result.title ?? '',
        text: result.text ?? '',
        image: result.image,
        categoryId: categoryId
      }, index ?? 1, id);
    } else {
        observer = this.blogsRepository.addBlog({
          id: 1,
          date: new Date(),
          title: result.title ?? '',
          text: result.text ?? '',
          image: null,
          rating: 0,
          categoryId: categoryId
        }, result.image);
    }

    observer
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: (message: string) => {
          this.snackBar.open(message);
        },
        next: (blogs: Blog[]) => {
          if (id === null) {
            this.blogsStore.count.update((val) => val + 1);
          }
          this.blogsStore.updateBlogs(blogs);
          this.snackBar.open(id === null ? 'Статья добавлена' : 'Статья изменена');
        }
      });
  }
}
