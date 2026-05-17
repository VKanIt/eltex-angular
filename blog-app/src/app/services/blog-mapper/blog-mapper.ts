import { Injectable } from "@angular/core";
import { IBlogMapper } from "./blog-mapper.interface";
import { Blog } from "../../types/Blog";
import { BlogResponseGetDto } from "../../dto/blog-card/blog.response.get.dto";
import { environment } from "../../../environments/environment";

@Injectable()
export class BlogMapper implements IBlogMapper {
    mapBlog(data: BlogResponseGetDto): Blog {
        return {
            id: data.id,
            date: new Date(data.createdAt),
            title: data.title,
            text: data.content,
            image: data.imgSrc !== null ? (environment.apiUrl !== null ? environment.apiUrl : '') + data.imgSrc : null,
            rating: data.rating,
            categoryId: data.categoryId
        }
    }
}