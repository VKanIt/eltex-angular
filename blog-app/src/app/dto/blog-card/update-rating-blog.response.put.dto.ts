export type UpdateRatingBlogResponsePutDto = {
    articleUpdateRating: {
        articleId: string,
        rating: number,
        prevRating: number,
    }
}