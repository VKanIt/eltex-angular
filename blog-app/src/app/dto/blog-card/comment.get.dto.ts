export type CommentGetDto = {
    articleId: string,
    avgRating: number,
    content: string,
    createdAt: string,
    id: string,
    rating: number,
    username: string,
    votes?: number[],
    votesCount: number,
}