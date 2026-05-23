import { DestroyRef, inject, Injectable } from "@angular/core";
import { IBlogCardRepository } from "./blog-card-repository.interface";
import { BLOG_CARD_STORE } from "../blog-card-store/blog-card-store.token";
import { Blog } from "../../types/Blog";
import { catchError, map, Observable } from "rxjs";
import { Comment } from "../../types/Comment";
import { Apollo } from "apollo-angular";
import { GET_BLOG_CARD } from "../../gql/blog-card/get-blog-card";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CombinedGraphQLErrors } from "@apollo/client";
import { BLOG_MAPPER } from "../blog-mapper/blog-mapper.token";
import { ADD_COMMENT } from "../../gql/blog-card/add-comment";
import { BlogsResponseGetDto } from "../../dto/blogs/blogs.response.get.dto";
import { UPDATE_RATING_COMMENT } from "../../gql/blog-card/update-rating-comment";
import { UPDATE_RATING_BLOG } from "../../gql/blog-card/update-rating-blog";

@Injectable()
export class BlogCardRepository implements IBlogCardRepository {
    //-----INJECTS-----\\
    private blogStore = inject(BLOG_CARD_STORE);
    private blogMapper = inject(BLOG_MAPPER);
    private apollo = inject(Apollo);
    private destroyRef = inject(DestroyRef);

    //-----METHODS-----\\
    public getBlog(id: number|string): Observable<string> {
        return this.apollo.query<BlogsResponseGetDto>({
                query: GET_BLOG_CARD,
                variables: { id: id }
            }).pipe(
                takeUntilDestroyed(this.destroyRef),
                catchError((error: CombinedGraphQLErrors) => {
                    console.log(error);
                    return '';
                }),
                map((resp: any) => {
                    const data = this.blogMapper.mapBlog(resp.data.article);
                    this.blogStore.updateBlog(data);

                    const comments = this.getCommentsBlog(data.id, false);
                    this.blogStore.updateComments(comments);

                    return '';
                })
            );
    }

    public addComment(comment: Comment): Observable<Comment[]> {
        this.blogStore.isDisabled.set(true);

        return this.apollo.mutate({
            mutation: ADD_COMMENT,
            variables: {
                body: {
                    articleId: comment.blogId,
                    content: comment.text,
                    username: comment.name
                }
            }
        }).pipe(
            takeUntilDestroyed(this.destroyRef),
            catchError((error: CombinedGraphQLErrors) => {
                console.log(error);
                return [];
            }),
            map((resp: any) => {
                const data = this.blogMapper.mapComment(resp.data.createComment);
                const comments = this.blogStore.blog().comments;
                comments.unshift(data);

                this.blogStore.isDisabled.set(false);

                return comments;
            })
        );
    }

    public updateRatingBlog(id: number|string, newRating: number): Observable<Blog> {
        this.blogStore.isDisabled.set(true);
        
        return this.apollo.mutate({
            mutation: UPDATE_RATING_BLOG,
            variables: {
                id: id,
                rating: newRating
            }
        }).pipe(
            takeUntilDestroyed(this.destroyRef),
            catchError((error: CombinedGraphQLErrors) => {
                console.log(error);
                return [];
            }),
            map((resp: any) => {
                const blog = this.blogStore.blog();
                blog.rating = resp.data.articleUpdateRating.rating;

                this.blogStore.isDisabled.set(false);

                return blog;
            })
        );
    }

    public updateRatingComment(commentId: number|string, newRating: number): Observable<Comment[]> {
        this.blogStore.isDisabled.set(true);

        return this.apollo.mutate({
            mutation: UPDATE_RATING_COMMENT,
            variables: {
                id: commentId,
                rating: newRating
            }
        }).pipe(
            takeUntilDestroyed(this.destroyRef),
            catchError((error: CombinedGraphQLErrors) => {
                console.log(error);
                return [];
            }),
            map((resp: any) => {
                const comments = this.blogStore.blog().comments;
                const index = comments.findIndex((item) => item.id === commentId);
                comments[index].rating = resp.data.updateCommentRating.rating;

                this.blogStore.isDisabled.set(false);

                return comments;
            })
        );
    }

    public getCommentsBlog(id: number|string, isMore: boolean = false, dataInit: Comment[] = []): Comment[] {
        let data = dataInit.length === 0 ? this.blogStore.blog().comments : dataInit;

        data.sort((a, b) => b.date.getTime() - a.date.getTime());
        this.blogStore.countComments.set(data.length);

        if (isMore) {
            this.blogStore.limitActiveComments.update((val) => val + this.blogStore.limitComments);
        } else if(dataInit.length === 0) {
            this.blogStore.limitActiveComments.set(this.blogStore.limitComments);
        }

        return data.slice(0, this.blogStore.limitActiveComments());
    }
}