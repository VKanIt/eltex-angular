import { Blog } from "../../types/Blog";
import { BlogResponseGetDto } from "../../dto/blog-card/blog.response.get.dto";

export interface IBlogMapper {
    mapBlog(data: BlogResponseGetDto): Blog
}