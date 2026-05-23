import { gql } from "apollo-angular";

export const GET_BLOG_CARD = gql`
query Article($id: ID!) {
    article(id: $id) {
        avgRating
        categoryId
        content
        createdAt
        id
        imgSrc
        rating
        title
        updatedAt
        votes
        votesCount
        comments {
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
}
`;