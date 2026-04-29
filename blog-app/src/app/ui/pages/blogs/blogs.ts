import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PutBlogModal } from '../../components/modals/put-blog-modal/put-blog-modal';
import { StatisticBlogsModal } from '../../components/modals/statistic-blogs-modal/statistic-blogs-modal';
import { CardBlog } from '../../components/card-blog/card-blog';
import { BLOGS_REPOSITORY } from '../../../services/blogs-repository/blogs-repository.token';
import { BLOGS_STORE } from '../../../services/blogs-store/blogs-store.token';
import { Blog } from '../../../types/Blog';

@Component({
  selector: 'app-blogs',
  imports: [CardBlog],
  templateUrl: 'blogs.html',
  styleUrl: 'blogs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blogs {
  //-----INJECTS-----\\
  protected readonly dialog = inject(MatDialog);
  protected blogsRepository = inject(BLOGS_REPOSITORY);
  protected blogsStore = inject(BLOGS_STORE);

  //-----SIGNALS-----\\
  protected isLoad = signal<boolean>(false);
  
  //-----METHODS-----\\
  constructor() {
    this.blogsRepository.getBlogs(false, 7);
  }

  protected openModalAddBlog() {
    this.dialog.open(PutBlogModal, {
      data: {
        blogsRepository: this.blogsRepository,
        blogsStore: this.blogsStore
      }
    });
  }
  
  protected openModalStatisticBlogs() {
    this.dialog.open(StatisticBlogsModal, {
      data: {
        count: this.blogsStore.count
      },
    });
  }

  protected deleteBlog(index: number) {
    this.blogsRepository.deleteBlog(index).subscribe((blogs: Blog[]) => {
      this.blogsStore.count--;
      this.blogsStore.updateBlogs(blogs.slice(0, this.blogsStore.limitActive));
    });
  }

  protected openModalEditBlog(index: number, event: any) {
    this.dialog.open(PutBlogModal, {
      data: {
        blogsRepository: this.blogsRepository,
        blogsStore: this.blogsStore,
        title: event.title,
        text: event.text,
        isEdit: true,
        index: index
      }
    });
  }
}
