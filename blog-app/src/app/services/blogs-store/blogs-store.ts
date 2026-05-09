import { Injectable, signal } from "@angular/core";
import { Blog } from "../../types/Blog";
import { IBlogsStore } from "./blogs-store.interface";

@Injectable()
export class BlogsStore implements IBlogsStore {
    //-----VARIABLES-----\\
    public limit: number = 6;

    //-----SIGNALS-----\\
    public count = signal<number>(0);
    public limitActive = signal<number>(0);
    public blogs = signal<Blog[]>([]);
    public isLoad = signal<boolean>(false);
    public isDisabled = signal<boolean>(false);

    //-----METHODS-----\\
    public updateBlogs(blogs: Blog[]): void {
        this.blogs.set(blogs);
    }
}