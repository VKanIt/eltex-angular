import { ChangeDetectionStrategy, Component, DestroyRef, inject, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Comment } from '../../../types/Comment';
import { InputRating } from '../inputs/input-rating/input-rating';
import { BLOG_CARD_STORE } from '../../../services/blog-card-store/blog-card-store.token';
import { BLOG_CARD_REPOSITORY } from '../../../services/blog-card-repository/blog-card-repository.token';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-comment',
  imports: [MatCardModule, InputRating, DatePipe],
  templateUrl: 'card-comment.html',
  styleUrl: 'card-comment.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComment {
  //-----INJECTS-----\\
  private blogStore = inject(BLOG_CARD_STORE);
  private blogRepository = inject(BLOG_CARD_REPOSITORY);
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
      .subscribe();
  }
}
