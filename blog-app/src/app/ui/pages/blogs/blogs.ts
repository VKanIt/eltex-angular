import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogModal } from '../../components/modals/add-blog-modal/add-blog-modal';
import { EditBlogModal } from '../../components/modals/edit-blog-modal/edit-blog-modal';
import { StatisticBlogsModal } from '../../components/modals/statistic-blogs-modal/statistic-blogs-modal';
import { CardBlog } from '../../components/card-blog/card-blog';

@Component({
  selector: 'app-blogs',
  imports: [CardBlog],
  templateUrl: 'blogs.html',
  styleUrl: 'blogs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blogs {
  protected limit = signal(7);
  private now = new Date();

  protected blogs = signal([
    {
      id: 1,
      date: this.now,
      title: 'test1',
      text: 'test1'
    },
    {
      id: 2,
      date: new Date((new Date()).setDate(this.now.getDate() - 1)),
      title: 'test2',
      text: 'test2'
    },
    {
      id: 3,
      date: new Date((new Date()).setDate(this.now.getDate() - 2)),
      title: 'test3',
      text: 'test3'
    },
    {
      id: 4,
      date: new Date((new Date()).setDate(this.now.getDate() - 3)),
      title: 'test4',
      text: 'test4'
    },
    {
      id: 5,
      date: new Date((new Date()).setDate(this.now.getDate() - 4)),
      title: 'test5',
      text: 'test5'
    },
    {
      id: 6,
      date: new Date((new Date()).setDate(this.now.getDate() - 5)),
      title: 'test5',
      text: 'test5'
    },
    {
      id: 7,
      date: new Date((new Date()).setDate(this.now.getDate() - 6)),
      title: 'test5',
      text: 'test5'
    },
    {
      id: 8,
      date: new Date((new Date()).setDate(this.now.getDate() - 7)),
      title: 'test5',
      text: 'test5'
    },
    {
      id: 9,
      date: new Date((new Date()).setDate(this.now.getDate() - 8)),
      title: 'test5',
      text: 'test5'
    }
  ] as any[]);

  protected blogsLimit = computed(() => {
    this.blogs().sort((a, b) => b.date.getTime() - a.date.getTime());

    return this.blogs().slice(0, this.limit());
  });

  protected readonly dialog = inject(MatDialog);
  
  protected openModalAddBlog() {
    const dialogRef = this.dialog.open(AddBlogModal);
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        return;
      }

      this.blogs.update((old) => {
        const data = [...old];
        
        const maxKey = data.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.id), 0);
        
        data.push({
          id: maxKey + 1,
          date: new Date(),
          title: result.title,
          text: result.text
        });

        return data;
      });
    });
  }
  
  protected openModalStatisticBlogs() {
    this.dialog.open(StatisticBlogsModal, {
      data: {
        count: this.blogs().length
      },
    });
  }

  protected deleteBlog(index: number) {
    this.blogs.update((old) => {
      const data = [...old];
      data.splice(index, 1);
      return data;
    });
  }

  protected openModalEditBlog(index: number, event: any) {
    const dialogRef = this.dialog.open(EditBlogModal, {
      data: {
        title: event.title,
        text: event.text
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        return;
      }
      
      this.blogs.update((old) => {
        const data = [...old];
        
        data[index].title = result.title;
        data[index].text = result.text;

        return data;
      });
    });
  }

  protected showMore() {
    this.limit.set(this.limit() + 6);
  }
}
