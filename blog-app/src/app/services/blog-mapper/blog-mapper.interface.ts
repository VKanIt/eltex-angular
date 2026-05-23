import { Blog } from "../../types/Blog";
import { BlogResponseGetDto } from "../../dto/blog-card/blog.response.get.dto";
import { CommentGetDto } from "../../dto/blog-card/comment.get.dto";
import { Comment } from "../../types/Comment";

export interface IBlogMapper {
    mapBlog(data: BlogResponseGetDto): Blog
    mapComment(data: CommentGetDto): Comment
}