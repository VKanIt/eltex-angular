import { gql } from "apollo-angular";

export const ADD_COMMENT = gql`
mutation CreateComment($body: CreateCommentInput!) {
    createComment(createComment: $body) {
        articleId
        avgRating
        content
        createdAt
        id
        rating
        username
        votes
        votesCount
    }
}
`;