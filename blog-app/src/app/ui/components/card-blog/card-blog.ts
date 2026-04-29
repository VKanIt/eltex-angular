import { ChangeDetectionStrategy, Component, EventEmitter, inject, input, Output } from '@angular/core';
import { Blog } from '../../../types/Blog';
import { BLOGS_REPOSITORY } from '../../../services/blogs-repository/blogs-repository.token';

@Component({
  selector: 'app-card-blog',
  imports: [],
  templateUrl: 'card-blog.html',
  styleUrl: 'card-blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardBlog {
  //-----INJECTS-----\\
  protected blogsRepository = inject(BLOGS_REPOSITORY);
  
  //-----INPUTS-----\\
  public blog = input<Blog>({
    id: null,
    date: new Date(),
    title: '',
    text: '',
    image: null
  });
  public isBigCard = input(false);

  //-----EMITS-----\\
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  //-----METHODS-----\\
  protected deleteBlog() {
    this.delete.emit();
  }

  protected editBlog() {
    this.edit.emit({
      title: this.blog().title,
      text: this.blog().text
    });
  }
}
