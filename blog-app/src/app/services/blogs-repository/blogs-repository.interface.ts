import { Observable } from "rxjs";
import { Blog } from "../../types/Blog";
import { WritableSignal } from "@angular/core";

export interface IBlogsRepository {
    isLoad: WritableSignal<boolean>
    isDisabled: WritableSignal<boolean>

    getBlogs(isMore?: boolean, limitInit?: number) : void
    addBlog(blog: Blog) : Observable<Blog[]>
    editBlog(newData: {title: string, text: string}, index: number) : Observable<Blog[]>
    deleteBlog(index: number) : Observable<Blog[]>
}