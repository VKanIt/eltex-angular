import { Injectable, signal } from "@angular/core";
import { Blog } from "../../types/Blog";
import { IBlogsStore } from "./blogs-store.interface";

@Injectable()

export class BlogsStore implements IBlogsStore {
    //-----VARIABLES-----\\
    public count: number = 0;
    public limit: number = 6;
    public limitActive: number = 0;

    //-----SIGNALS-----\\
    public blogs = signal<Blog[]>([]);

    //-----METHODS-----\\
    public updateBlogs(blogs: Blog[]) : void 
    {
        this.blogs.set(blogs);
    }
}