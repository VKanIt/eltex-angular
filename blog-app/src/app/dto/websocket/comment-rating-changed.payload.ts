export type CommentRatingChangedPayload = {
    commentId: string;
    articleId: string;
    rating: number;
    prevRating?: number;
};