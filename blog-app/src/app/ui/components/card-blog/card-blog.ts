import { ChangeDetectionStrategy, Component, EventEmitter, inject, input, Output } from '@angular/core';
import { Blog } from '../../../types/Blog';
import { BLOGS_STORE } from '../../../services/blogs-store/blogs-store.token';
import { RouterLink } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { RoleView } from "../../directives/role-view";

@Component({
  selector: 'app-card-blog',
  imports: [RouterLink, MatIcon, RoleView],
  templateUrl: 'card-blog.html',
  styleUrl: 'card-blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBlog {
  //-----INJECTS-----\\
  private blogsStore = inject(BLOGS_STORE);

  //-----SIGNALS-----\\
  protected isDisabled = this.blogsStore.isDisabled;
  
  //-----INPUTS-----\\
  public blog = input<Blog>({
    id: 1,
    date: new Date(),
    title: '',
    text: '',
    image: null,
    rating: 0,
    categoryId: null,
    comments: []
  });
  public isBigCard = input(false);

  //-----EMITS-----\\
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  //-----METHODS-----\\
  protected deleteBlog(e: any) {
    e.stopPropagation();
    e.preventDefault();

    this.delete.emit();
  }

  protected editBlog(e: any) {
    e.stopPropagation();
    e.preventDefault();

    this.edit.emit({
      title: this.blog().title,
      text: this.blog().text,
      image: this.blog().image,
      categoryId: this.blog().categoryId
    });
  }
}
