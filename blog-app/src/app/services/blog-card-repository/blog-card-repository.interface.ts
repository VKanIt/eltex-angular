import { Observable } from "rxjs"
import { Blog } from "../../types/Blog"
import { Comment } from "../../types/Comment"

export interface IBlogCardRepository {
    getBlog(id: number|string): Observable<string>
    addComment(comment: Comment): Observable<Comment[]>
    updateRatingComment(commentId: number|string, newRating: number): Observable<Comment[]>
    updateRatingBlog(id: number|string, newRating: number): Observable<Blog>
    getCommentsBlog(id: number|string, isMore?: boolean, dataInit?: Comment[]): Comment[]
}