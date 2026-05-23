import { inject, Injectable } from "@angular/core";
import { IBlogCardRepository } from "./blog-card-repository.interface";
import { BLOG_CARD_STORE } from "../blog-card-store/blog-card-store.token";
import { Blog } from "../../types/Blog";
import { Observable } from "rxjs";
import { Comment } from "../../types/Comment";
import { STORAGE_SERVICE } from "../storage-service/storage-service.token";

@Injectable()
export class BlogCardRepositoryLc implements IBlogCardRepository {
    //-----INJECTS-----\\
    private blogStore = inject(BLOG_CARD_STORE);
    private storageService = inject(STORAGE_SERVICE);

    //-----METHODS-----\\
    public getBlog(id: number): Observable<string> {
        return new Observable((subscriber) => {
            const data = this.storageService.loadInStorage('blogs');

            const index = this.getIndex(id, data);
            const blog = index !== -1 ? data[index] : null;

            if (blog === null) {
                subscriber.error('Блог не найден');
            } else {                
                this.blogStore.updateBlog(blog);
                
                this.blogStore.updateComments(this.getCommentsBlog(id));
                subscriber.next('');
            }
        });
    }

    public addComment(comment: Comment): Observable<Comment[]> {
        return new Observable((subscriber) => {
            this.blogStore.isDisabled.set(true);

            setTimeout(() => {
                const data = this.storageService.loadInStorage('comments');
                
                comment.id = (data.length > 0 ? data.reduce((max, val) => Math.max(max, val.id), 1) : 0) + 1;

                data.unshift(comment);

                localStorage.setItem('comments', JSON.stringify(data));

                subscriber.next(data);

                this.blogStore.isDisabled.set(false);
            }, 1000);
        });
    }

    public updateRatingBlog(id: number, newRating: number): Observable<Blog> {
        return new Observable((subscriber) => {
            this.blogStore.isDisabled.set(true);

            setTimeout(() => {
                const data = this.storageService.loadInStorage('blogs');

                const index = this.getIndex(id, data);

                if (index === -1) {
                    subscriber.error('Блог не найден');
                } else {
                    data[index].rating = newRating;

                    localStorage.setItem('blogs', JSON.stringify(data));

                    subscriber.next(data[index]);

                    this.blogStore.isDisabled.set(false);
                }
            }, 1000);
        });
    }

    public updateRatingComment(commentId: number|string, newRating: number): Observable<Comment[]> {
        return new Observable((subscriber) => {
            this.blogStore.isDisabled.set(true);

            setTimeout(() => {
                const data = this.storageService.loadInStorage('comments');

                const index = this.getIndex(commentId, data);

                data[index].rating = newRating;

                localStorage.setItem('comments', JSON.stringify(data));

                subscriber.next(data);

                this.blogStore.isDisabled.set(false);
            }, 1000);
        });
    }

    public getCommentsBlog(id: number, isMore: boolean = false, dataInit: Comment[] = []): Comment[] {
        let data = dataInit.length === 0 ? this.storageService.loadInStorage('comments') : dataInit;

        data = data.filter((item) => item.blogId === id);

        this.blogStore.countComments.set(data.length);

        if (isMore) {
            this.blogStore.limitActiveComments.update((val) => val + this.blogStore.limitComments);
        } else if(dataInit.length === 0) {
            this.blogStore.limitActiveComments.set(this.blogStore.limitComments);
        }

        return data.slice(0, this.blogStore.limitActiveComments());
    }

    private getIndex(id: number|string, data: any[]): number {
        return data.findIndex((val) => val.id === id);
    }
}