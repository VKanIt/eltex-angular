import { Observable } from "rxjs";
import { Blog } from "../../types/Blog";

export interface IBlogsRepository {
    getBlogs(isMore?: boolean, limitInit?: number): void
    addBlog(blog: Blog, newImage?: File|null): Observable<Blog[]>
    editBlog(newData: {title: string, text: string, image: File|null, categoryId: string|null}, index: number, id?: string|number): Observable<Blog[]>
    deleteBlog(index: number, id?: string|number): Observable<Blog[]|null>
    getCountComments(): number
}