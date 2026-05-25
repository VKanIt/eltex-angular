export type UpdateRatingCommentResponsePutDto = {
    updateCommentRating: {
        commentId: string,
        articleId: string,
        rating: number,
        prevRating: number,
    }
}