import { WritableSignal } from "@angular/core";
import { Blog } from "../../types/Blog";

export interface IBlogsStore {
    blogs: WritableSignal<Blog[]>
    count: number
    limit: number
    limitActive: number

    updateBlogs(blogs: Blog[]): void
}