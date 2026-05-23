import { Injectable } from "@angular/core";
import { IBlogMapper } from "./blog-mapper.interface";
import { Blog } from "../../types/Blog";
import { BlogResponseGetDto } from "../../dto/blog-card/blog.response.get.dto";
import { environment } from "../../../environments/environment";
import { CommentGetDto } from "../../dto/blog-card/comment.get.dto";
import { Comment } from "../../types/Comment";

@Injectable()
export class BlogMapper implements IBlogMapper {
    public mapBlog(data: BlogResponseGetDto): Blog {
        const blog: Blog = {
            id: data.id,
            date: new Date(data.createdAt),
            title: data.title,
            text: data.content,
            image: data.imgSrc !== null ? (environment.apiUrl !== null ? environment.apiUrl : '') + data.imgSrc : null,
            rating: data.rating,
            categoryId: data.categoryId,
            comments: []
        };

        if (data.comments !== undefined) {
            data.comments.map((item: CommentGetDto) => {
                blog.comments.push({
                    id: item.id,
                    name: item.username,
                    text: item.content,
                    date: new Date(item.createdAt),
                    rating: item.rating,
                    blogId: item.articleId
                });
            });
        }

        return blog;
    }

    public mapComment(data: CommentGetDto): Comment {
        return {
            id: data.id,
            name: data.username,
            text: data.content,
            date: new Date(data.createdAt),
            rating: data.rating,
            blogId: data.articleId
        }
    }
}