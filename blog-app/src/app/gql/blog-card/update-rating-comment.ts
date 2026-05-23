import { gql } from "apollo-angular";

export const UPDATE_RATING_COMMENT = gql`
mutation UpdateCommentRating($id: ID!, $rating: Float!) {
    updateCommentRating(id: $id, rating: $rating) {
        rating
    }
}`;