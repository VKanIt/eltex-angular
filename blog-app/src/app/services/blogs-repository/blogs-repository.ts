import { inject, Injectable } from "@angular/core";
import { Blog } from "../../types/Blog";
import { BLOGS_STORE } from "../blogs-store/blogs-store.token";
import { Observable } from "rxjs";
import { IBlogsRepository } from "./blogs-repository.interface";
import { STORAGE_SERVICE } from "../storage-service/storage-service.token";

@Injectable()
export class BlogsRepository implements IBlogsRepository {
    //-----INJECTS-----\\
    private blogsStore = inject(BLOGS_STORE);
    private storageService = inject(STORAGE_SERVICE);

    //-----METHODS-----\\
    public getBlogs(isMore: boolean = false, limitInit: number|null = null): void {
        this.blogsStore.isLoad.set(false);

        if (!isMore) {
            this.blogsStore.updateBlogs([]);
        }

        setTimeout(() => {
            const data = this.storageService.loadInStorage('blogs');

            this.blogsStore.count.set(data.length);

            if (isMore) {
                this.blogsStore.limitActive.update((val) => val + this.blogsStore.limit);
            } else {
                this.blogsStore.limitActive.set(limitInit ?? this.blogsStore.limit);
            }

            this.blogsStore.updateBlogs(data.slice(0, this.blogsStore.limitActive()));
            
            this.blogsStore.isLoad.set(true);
        }, 1000);
    }
    
    public addBlog(blog: Blog): Observable<Blog[]> {
        return new Observable((subscriber) => {
            this.blogsStore.isDisabled.set(true);
            
            setTimeout(() => {
                const data = this.storageService.loadInStorage('blogs');
                
                blog.id = (data.length > 0 ? data.reduce((max, val) => Math.max(max, val.id), 1) : 0) + 1;

                data.unshift(blog);
                localStorage.setItem('blogs', JSON.stringify(data));

                subscriber.next(data);
                
                this.blogsStore.isDisabled.set(false);
            }, 1000);
        });
    }

    public editBlog(newData: {title: string, text: string}, index: number): Observable<Blog[]> {
        return new Observable((subscriber) => {
            this.blogsStore.isDisabled.set(true);
            
            setTimeout(() => {
                const data = this.storageService.loadInStorage('blogs');

                data[index].title = newData.title;
                data[index].text = newData.text;

                localStorage.setItem('blogs', JSON.stringify(data));

                subscriber.next(data);
                
                this.blogsStore.isDisabled.set(false);
            }, 1000);
        });
    }

    public deleteBlog(index: number): Observable<Blog[]> {
        return new Observable((subscriber) => {
            this.blogsStore.isDisabled.set(true);
            
            setTimeout(() => {
                const data = this.storageService.loadInStorage('blogs');
                const dataComments = this.storageService.loadInStorage('comments');
                const result = dataComments.filter((item) => item.blogId !== data[index].id);

                data.splice(index, 1);

                localStorage.setItem('blogs', JSON.stringify(data));
                localStorage.setItem('comments', JSON.stringify(result));

                subscriber.next(data);
                
                this.blogsStore.isDisabled.set(false);
            }, 1000);
        });
    }

    public getCountComments(): number {
        return this.storageService.loadInStorage('comments', true).length;
    }
}