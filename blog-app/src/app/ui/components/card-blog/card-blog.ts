import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  imports: [],
  templateUrl: 'card-blog.html',
  styleUrl: 'card-blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBlog {
  title = input('');
  text = input('');
  date = input(new Date());
  image = input('./assets/images/blogs/image_blog.png');
  isBigCard = input(false);

  @Output() delete: EventEmitter<any> = new EventEmitter();

  deleteBlog() {
    this.delete.emit();
  }
}
