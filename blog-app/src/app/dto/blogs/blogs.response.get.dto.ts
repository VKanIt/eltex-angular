import { BlogResponseGetDto } from "../blog-card/blog.response.get.dto"

export type BlogsResponseGetDto = {
    items: BlogResponseGetDto[],
    limit: number,
    page: number,
    total: number
}