import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardBlog } from '../../components/card-blog/card-blog';

@Component({
  selector: 'app-index',
  imports: [RouterLink, CardBlog],
  templateUrl: 'index.html',
  styleUrl: 'index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Index { 
  blogs = signal([
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
        title: 'test2',
        text: 'test2'
    },
    {
        id: 4,
        date: new Date(),
        title: 'test2',
        text: 'test2'
    },
    {
        id: 5,
        date: new Date(),
        title: 'test2',
        text: 'test2'
    }
  ] as any[]);

  blogsLimit = computed(() => {
    return this.blogs().slice(0, 2);
  });
}