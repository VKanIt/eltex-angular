import { Observable } from "rxjs"
import { Blog } from "../../types/Blog"
import { Comment } from "../../types/Comment"

export interface IBlogRepository {
    getBlog(id: number): Observable<string>
    addComment(comment: Comment): Observable<Comment[]>
    updateRatingComment(commentId: number, newRating: number): Observable<Comment[]>
    updateRatingBlog(id: number, newRating: number): Observable<Blog>
    getCommentsBlog(id: number, isMore?: boolean, dataInit?: Comment[]): Comment[]
}