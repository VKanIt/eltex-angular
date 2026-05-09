import { Injectable, signal } from "@angular/core";
import { IBlogStore } from "./blog-store.interface";
import { Blog } from "../../types/Blog";
import { Comment } from "../../types/Comment";

@Injectable()
export class BlogStore implements IBlogStore {
    //-----VARIABLES-----\\
    public limitComments: number = 6;
    
    //-----SIGNALS-----\\
    public blog = signal<Blog>({
        id: 1,
        date: new Date(),
        title: '',
        text: '',
        image: null,
        rating: 0,
    });
    public comments = signal<Comment[]>([]);
    public countComments = signal<number>(0);
    public limitActiveComments = signal<number>(0);
    public isDisabled = signal<boolean>(false);

    //-----METHODS-----\\
    public updateBlog(blog: Blog): void {
        this.blog.set(blog);
    }

    public updateComments(comments: Comment[]): void {
        this.comments.set(comments);
    }
}