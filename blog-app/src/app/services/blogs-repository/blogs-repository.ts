import { inject, Injectable, signal } from "@angular/core";
import { Blog } from "../../types/Blog";
import { BLOGS_STORE } from "../blogs-store/blogs-store.token";
import { Observable } from "rxjs";
import { IBlogsRepository } from "./blogs-repository.interface";

@Injectable()

export class BlogsRepository implements IBlogsRepository
{
    //-----INJECTS-----\\
    private blogsStore = inject(BLOGS_STORE);

    //-----SIGNALS-----\\
    public isLoad = signal(false);
    public isDisabled = signal(false);

    //-----METHODS-----\\
    public getBlogs(isMore: boolean = false, limitInit: number|null = null) : void
    {
        this.isLoad.set(false);

        if (!isMore) {
            this.blogsStore.updateBlogs([]);
        }

        setTimeout(() => {
            const data = this.loadInStorage();

            this.blogsStore.count = data.length;

            if (isMore) {
                this.blogsStore.limitActive += this.blogsStore.limit;
            } else {
                this.blogsStore.limitActive = limitInit??this.blogsStore.limit;
            }

            this.blogsStore.updateBlogs(data.slice(0, this.blogsStore.limitActive));
            
            this.isLoad.set(true);
        }, 1000);
    }
    
    public addBlog(blog: Blog) : Observable<Blog[]>
    {
        return new Observable((subscriber) => {
            this.isDisabled.set(true);
            
            setTimeout(() => {
                const data = this.loadInStorage();

                data.unshift(blog);
                localStorage.setItem('blogs', JSON.stringify(data));

                subscriber.next(data);
                
                this.isDisabled.set(false);
            }, 1000);
        });
    }

    public editBlog(newData: {title: string, text: string}, index: number) : Observable<Blog[]>
    {
        return new Observable((subscriber) => {
            this.isDisabled.set(true);
            
            setTimeout(() => {
                const data = this.loadInStorage();

                data[index].title = newData.title;
                data[index].text = newData.text;

                localStorage.setItem('blogs', JSON.stringify(data));

                subscriber.next(data);
                
                this.isDisabled.set(false);
            }, 1000);
        });
    }

    public deleteBlog(index: number) : Observable<Blog[]>
    {
        return new Observable((subscriber) => {
            this.isDisabled.set(true);
            
            setTimeout(() => {
                const data = this.loadInStorage();

                data.splice(index, 1);

                localStorage.setItem('blogs', JSON.stringify(data));

                subscriber.next(data);
                
                this.isDisabled.set(false);
            }, 1000);
        });
    }

    private loadInStorage() : Blog[]
    {
        const tmp = localStorage.getItem('blogs');

        let data = [];
        if (tmp !== null && tmp !== '') {
            data = JSON.parse(tmp);
            data.map((item: Blog) => {
                item.date = new Date(item.date);
            });

            data.sort((a: Blog, b: Blog) => b.date.getTime() - a.date.getTime());
        }

        return data;
    }
}