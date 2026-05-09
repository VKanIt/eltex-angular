import { WritableSignal } from "@angular/core";
import { Blog } from "../../types/Blog";

export interface IBlogsStore {
    blogs: WritableSignal<Blog[]>
    count: WritableSignal<number>
    limit: number
    limitActive: WritableSignal<number>
    isLoad: WritableSignal<boolean>
    isDisabled: WritableSignal<boolean>

    updateBlogs(blogs: Blog[]): void
}