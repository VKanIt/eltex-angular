import { WritableSignal } from "@angular/core";
import { Blog } from "../../types/Blog";
import { Comment } from "../../types/Comment";

export interface IBlogCardStore {
    //-----SIGNALS-----\\
    blog: WritableSignal<Blog>
    comments: WritableSignal<Comment[]>
    countComments: WritableSignal<number>
    limitActiveComments: WritableSignal<number>
    isDisabled: WritableSignal<boolean>

    //-----VARIABLES-----\\
    limitComments: number

    //-----METHODS-----\\
    updateBlog(blog: Blog): void
    updateComments(comments: Comment[]): void
}