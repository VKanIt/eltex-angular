import { gql } from "apollo-angular";

export const UPDATE_RATING_BLOG = gql`
mutation ArticleUpdateRating($id: ID!, $rating: Float!) {
    articleUpdateRating(id: $id, rating: $rating) {
        rating
    }
}
`;