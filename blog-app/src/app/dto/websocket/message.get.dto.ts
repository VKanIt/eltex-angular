import { ArticeRatingChangedPayload } from "./article-rating-changed.payload"
import { CommentRatingChangedPayload } from "./comment-rating-changed.payload"
import { CreatedCommentPayload } from "./created-comment.payload"

export type WebSocketPayload = ArticeRatingChangedPayload 
        & CreatedCommentPayload
        & CommentRatingChangedPayload;

export type MessageGetDto = {
    event: string,
    type: string,
    payload: WebSocketPayload
}