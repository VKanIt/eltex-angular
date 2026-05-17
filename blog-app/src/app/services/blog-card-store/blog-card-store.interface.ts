import { WritableSignal } from "@angular/core";
import { Blog } from "../../types/Blog";
import { Comment } from "../../types/Comment";

export interface IBlogCardStore {
    blog: WritableSignal<Blog>
    comments: WritableSignal<Comment[]>
    countComments: WritableSignal<number>
    limitComments: number
    limitActiveComments: WritableSignal<number>
    isDisabled: WritableSignal<boolean>
    updateBlog(blog: Blog): void
    updateComments(comments: Comment[]): void
}