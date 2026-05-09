import { ChangeDetectionStrategy, Component, DestroyRef, inject, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Comment } from '../../../types/Comment';
import { InputRating } from '../inputs/input-rating/input-rating';
import { BLOG_STORE } from '../../../services/blog-store/blog-store.token';
import { BLOG_REPOSITORY } from '../../../services/blog-repository/blog-repository.token';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-card-comment',
  imports: [MatCardModule, InputRating],
  templateUrl: 'card-comment.html',
  styleUrl: 'card-comment.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComment {
  //-----INJECTS-----\\
  private blogStore = inject(BLOG_STORE);
  private blogRepository = inject(BLOG_REPOSITORY);
  private destroyRef = inject(DestroyRef);

  //-----SIGNALS-----\\
  protected isDisabled = this.blogStore.isDisabled;

  //-----INPUTS-----\\
  public comment = input<Comment>({
    id: 1,
    name: '',
    text: '',
    date: new Date(),
    rating: 0,
    blogId: 1
  });

  //-----METHODS-----\\
  public editRating(e: number) {
    this.blogRepository.updateRatingComment(this.comment().id, e)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((comments) => {
        this.blogStore.updateComments(this.blogRepository.getCommentsBlog(this.comment().blogId, false, comments));
      });
  }
}
