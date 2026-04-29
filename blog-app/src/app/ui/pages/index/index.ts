import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardBlog } from '../../components/card-blog/card-blog';
import { MainFirstPage } from '../../components/main-first-page/main-first-page';
import { Skills } from "../../components/skills/skills";
import { Works } from "../../components/works/works";
import { Hobbies } from "../../components/hobbies/hobbies";
import { BLOGS_STORE } from '../../../services/blogs-store/blogs-store.token';
import { BLOGS_REPOSITORY } from '../../../services/blogs-repository/blogs-repository.token';

@Component({
  selector: 'app-index',
  imports: [RouterLink, CardBlog, MainFirstPage, Skills, Works, Hobbies],
  templateUrl: 'index.html',
  styleUrl: 'index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Index {
  //-----INJECTS-----\\
  protected blogsStore = inject(BLOGS_STORE);
  protected blogsRepository = inject(BLOGS_REPOSITORY);

  //-----METHODS-----\\
  constructor() {
    this.blogsRepository.getBlogs(false, 2);
  }
}