import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddBlogModal } from '../../components/modals/AddBlogModal/AddBlogModal';
import { StatisticBlogsModal } from '../../components/modals/StatisticBlogsModal/StatisticBlogsModal';
import { CardBlog } from '../../components/CardBlog/CardBlog';

@Component({
  selector: 'app-blogs',
  imports: [CardBlog],
  templateUrl: 'blogs.html',
  styleUrl: 'blogs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blogs {
  public blogs = signal([
    {
        id: 1,
        date: new Date(),
        title: 'test1',
        text: 'test1'
    },
    {
        id: 2,
        date: new Date(),
        title: 'test2',
        text: 'test2'
    },
    {
        id: 3,
        date: new Date(),
        title: 'test3',
        text: 'test3'
    },
    {
        id: 4,
        date: new Date(),
        title: 'test4',
        text: 'test4'
    },
    {
        id: 5,
        date: new Date(),
        title: 'test5',
        text: 'test5'
    }
] as any[]);

  readonly dialog = inject(MatDialog);
  
  openModalAddBlog() {
    this.dialog.open(AddBlogModal, {
      data: {},
    });
  }

  openModalStatisticBlogs() {
    this.dialog.open(StatisticBlogsModal, {
      data: {
        count: this.blogs().length
      },
    });
  }

  deleteBlog(index: number) {
    this.blogs().splice(index, 1);
  }
}
