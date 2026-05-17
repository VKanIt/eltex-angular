import { DestroyRef, inject, Injectable } from "@angular/core";
import { Blog } from "../../types/Blog";
import { BLOGS_STORE } from "../blogs-store/blogs-store.token";
import { map, Observable } from "rxjs";
import { IBlogsRepository } from "./blogs-repository.interface";
import { HttpClient } from "@angular/common/http";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BlogsResponseGetDto } from "../../dto/blogs/blogs.response.get.dto";
import { BLOG_MAPPER } from "../blog-mapper/blog-mapper.token";

@Injectable()
export class BlogsRepository implements IBlogsRepository {
    //-----INJECTS-----\\
    private destroyRef = inject(DestroyRef);
    private httpClient = inject(HttpClient);
    private blogMapper = inject(BLOG_MAPPER);
    private blogsStore = inject(BLOGS_STORE);

    //-----METHODS-----\\
    public getBlogs(isMore: boolean = false, limitInit: number|null = null): void {
        this.blogsStore.isLoad.set(false);
        if (isMore) {
            this.blogsStore.limitActive.update((val) => val + this.blogsStore.limit);
        } else {
            this.blogsStore.updateBlogs([]);
            this.blogsStore.limitActive.set(limitInit ?? this.blogsStore.limit);
        }

        this.httpClient.get<BlogsResponseGetDto>('/api/articles', {
            params: {
                page: 1,
                limit: this.blogsStore.limitActive()
            }
        })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((resp) => {
            this.blogsStore.count.set(resp.total);

            const data: Blog[] = [];
            resp.items.map((item) => {
                data.push(this.blogMapper.mapBlog(item));
            });

            this.blogsStore.updateBlogs(data);

            this.blogsStore.isLoad.set(true);
        });
    }
    
    public addBlog(blog: Blog, newImage: File|null): Observable<Blog[]> { 
        this.blogsStore.isDisabled.set(true);

        const formData = new FormData();
        formData.append('title', blog.title);
        formData.append('content', blog.text);
        if (newImage !== null) {
            formData.append('image', newImage);
        }

        if (blog.categoryId !== null && blog.categoryId !== undefined) {
            formData.append('categoryId', blog.categoryId);
        }

        return this.httpClient.post('/api/articles', formData)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map((resp: any) => {
                    if (resp.status !== undefined) {
                        this.blogsStore.isDisabled.set(false);

                        return resp.message;
                    }

                    const data = this.blogsStore.blogs();
                    
                    data.unshift(this.blogMapper.mapBlog(resp));
                    data.splice(data.length - 1, 1);

                    this.blogsStore.isDisabled.set(false);
                    
                    return data;
                })
            );
    }

    public editBlog(newData: {title: string, text: string, image: File|null, categoryId: string|null}, index: number, id: string|number): Observable<Blog[]> {
        this.blogsStore.isDisabled.set(true);

        const formData = new FormData();
        formData.append('title', newData.title);
        formData.append('content', newData.text);
        if (newData.image !== null) {
            formData.append('image', newData.image);
        }

        if (newData.categoryId !== null) {
            formData.append('categoryId', newData.categoryId);
        }

        return this.httpClient.patch(`/api/articles/${id}`, formData)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map((resp: any) => {
                    if (resp.status !== undefined) {
                        this.blogsStore.isDisabled.set(false);

                        return resp.message;
                    }

                    const data = this.blogsStore.blogs();
                    
                    data[index] = this.blogMapper.mapBlog(resp);

                    this.blogsStore.isDisabled.set(false);
                    
                    return data;
                })
            );
    }

    public deleteBlog(index: number, id: string|number): Observable<Blog[]|null> {
        this.blogsStore.isDisabled.set(true);

        return this.httpClient.delete(`/api/articles/${id}`)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map((resp: any) => {
                    if (resp.status !== undefined) {
                        this.blogsStore.isDisabled.set(false);

                        return resp.message;
                    }

                    this.getBlogs(false, this.blogsStore.limitActive());

                    this.blogsStore.isDisabled.set(false);
                    
                    return null;
                })
            );
    }

    public getCountComments(): number {
        return 0;
    }
}