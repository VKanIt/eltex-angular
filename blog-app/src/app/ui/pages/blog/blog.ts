import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { BLOG_CARD_STORE } from '../../../services/blog-card-store/blog-card-store.token';
import { BLOG_CARD_REPOSITORY } from '../../../services/blog-card-repository/blog-card-repository.token';
import { ActivatedRoute } from '@angular/router';
import { BlogCardStore } from '../../../services/blog-card-store/blog-card-store';
import { BlogCardRepository } from '../../../services/blog-card-repository/blog-card-repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComment } from '../../components/card-comment/card-comment';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentModal } from '../../components/modals/add-comment-modal/add-comment-modal';
import { Title } from '@angular/platform-browser';
import { InputRating } from '../../components/inputs/input-rating/input-rating';
import { environment } from '../../../../environments/environment';
import { BlogCardRepositoryLc } from '../../../services/blog-card-repository/blog-card-repository-lc';
import { ENV_CONF } from '../../../../environments/enviroment.token';
import { WEBSOCKET } from '../../../services/websocket/websocket.token';
import { Websocket } from '../../../services/websocket/websocket';
import { MessageGetDto, WebSocketPayload } from '../../../dto/websocket/message.get.dto';
import type { Blog as typeBlog } from '../../../types/Blog';
import { AUTH_SERVICE } from '../../../services/auth-service/auth-service.token';

@Component({
  selector: 'app-blog',
  imports: [MatButtonModule, MatIconModule, CardComment, InputRating],
  templateUrl: 'blog.html',
  styleUrl: 'blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BLOG_CARD_STORE, useClass: BlogCardStore },
    { provide: BLOG_CARD_REPOSITORY, useClass: environment.useServiceLc ? BlogCardRepositoryLc : BlogCardRepository },
    { provide: WEBSOCKET, useClass: Websocket }
  ]
})
export class Blog { 
  //-----INJECTS-----\\
  private blogStore = inject(BLOG_CARD_STORE);
  private blogRepository = inject(BLOG_CARD_REPOSITORY);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private titlePage = inject(Title);
  private enviroment = inject(ENV_CONF);
  private websocket = inject(WEBSOCKET);
  private authService = inject(AUTH_SERVICE);

  //-----SIGNALS-----\\
  protected blogId = signal<number|string>(1);
  protected blog = this.blogStore.blog;
  protected comments = this.blogStore.comments;
  protected countComments = this.blogStore.countComments;
  protected limitActiveComments = this.blogStore.limitActiveComments;
  protected isEdit = signal<boolean>(false);
  protected isDisabled = this.blogStore.isDisabled;
  protected client = this.authService.client;

  private websocketEvents = new Map([
    [
      'ARTICLE_RATING_CHANGED', (payload: WebSocketPayload, data: typeBlog) => {
        data.rating = payload.rating;
        this.blogStore.updateBlog(data);
      }
    ],
    [
      'COMMENT_CREATED', (payload: WebSocketPayload, data: typeBlog) => {
        data.comments.unshift({
          id: payload.commentId,
          name: payload.username,
          text: payload.content,
          date: new Date(payload.createdAt),
          rating: 0,
          blogId: payload.articleId
        });

        this.blogStore.updateBlog(data);
        const comments = this.blogRepository.getCommentsBlog(payload.articleId, false);

        this.blogStore.updateComments(comments);
      }
    ],
    [
      'COMMENT_RATING_CHANGED', (payload: WebSocketPayload, data: typeBlog) => {
        const index = data.comments.findIndex((item) => item.id === payload.commentId);
        
        const tmp = {...data.comments[index]};
        tmp.rating = payload.rating;
        data.comments[index] = tmp;

        this.blogStore.updateBlog(data);
        const comments = this.blogRepository.getCommentsBlog(payload.articleId, false);

        this.blogStore.updateComments(comments);
      }
    ]
  ]);

  //-----METHODS-----\\  
  constructor() {
    this.activatedRoute.params
      .pipe(
        map((params) => this.enviroment.useServiceLc ? Number(params['id']) : params['id']),
        tap((id: number|string) => {
	        this.blogId.set(id);
	      }),
        switchMap((id: number|string) => {
		      return this.blogRepository.getBlog(id);
	      }),
        catchError((error: string) => {
          return throwError(() => new Error(error));
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.titlePage.setTitle(this.blog().title);
        this.websocket.subscribeArticle(this.blog().id);
        
        this.websocket.getChanged()?.subscribe((resp: MessageGetDto) => {
          const data = {...this.blogStore.blog()};
          data.comments = [...this.blogStore.blog().comments];

          const func = this.websocketEvents.get(resp.type);

          if (func !== undefined) {
            func(resp.payload, data);
          }
        });
      });
  }

  ngOnDestroy() {
    this.websocket.unsubscribeArticle();
  }

  protected editRating(e: number) {
    this.blogRepository.updateRatingBlog(this.blogId(), e)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((blog) => {
        if (!this.websocket.isConnect() && blog !== null) {
          this.blogStore.updateBlog(blog);
        }
      });
  }

  protected addComment() {
    const dialogRef = this.dialog.open(AddCommentModal, {
      data: {
        isDisabled: this.blogStore.isDisabled,
        username: this.client().username
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }

        let observer = this.blogRepository.addComment({
            id: 1,
            date: new Date(),
            name: result.name ?? '',
            text: result.text ?? '',
            rating: 0,
            blogId: this.blogId()
        })

        observer
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((comments) => {
            if (!this.websocket.isConnect()) {
              const data = this.blogRepository.getCommentsBlog(this.blogId(), false, comments);
              this.blogStore.updateComments(data); 
            }
          });
      });
  }

  protected getMore() {
    const blogsComments = this.blogRepository.getCommentsBlog(this.blogId(), true);
    this.blogStore.updateComments(blogsComments);
  }
}
