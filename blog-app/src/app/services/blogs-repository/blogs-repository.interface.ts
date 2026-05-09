import { Observable } from "rxjs";
import { Blog } from "../../types/Blog";

export interface IBlogsRepository {
    getBlogs(isMore?: boolean, limitInit?: number): void
    addBlog(blog: Blog): Observable<Blog[]>
    editBlog(newData: {title: string, text: string}, index: number): Observable<Blog[]>
    deleteBlog(index: number): Observable<Blog[]>
    getCountComments(): number
}