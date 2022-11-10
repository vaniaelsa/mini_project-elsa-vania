import { gql } from "@apollo/client";
// Queries //

export const GET_TWEET = gql`
  query MyQuery{
    project_tweet {
      id
      link
      description
      category
    }
  }
`;

export const GET_TWEET_BY_ID = gql`
  query MyQuery($id: Int){
    project_tweet(where : {id: {_eq: $id}}) {
      id
      link
      description
      category
    }
  }
`;

export const GET_TWEET_DESCRIPTION = gql`
  query MyQuery($description: String){
    project_tweet(order_by: {id: asc}, where : {description: {_ilike: $description}}) {
      id
      link
      description
      category
    }
  }
`;

export const POST_TWEET = gql`
  mutation MyMutation($link: String, $description: String, $category: String) {
    insert_project_tweet(
      objects: { link: $link, description: $description, category: $category }
    ) {
      returning {
        id
        link
        description
        category
      }
    }
  }
`;

// export const UPDATE_TWEET = gql`
//   mutation MyMutation(
//     $id: Int!
//     $link: String
//     $description: String
//     $category: String
//   ) {
//     update_project_tweet_by_pk(
//       pk_columns: { id: $id }
//       _set: { link: $link, description: $description, category: $category }
//     ) {
//       id
//       link
//       description
//       category
//     }
//   }
// `;
export const UPDATE_TWEET = gql`
  mutation MyMutation(
    $id: Int!
    $link: String!
    $description: String!
    $category: String!
  ) {
    update_project_tweet(
      where: { id: { _eq: $id } }
      _set: { link: $link, description: $description, category: $category }
    ) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_TWEET = gql`
  mutation MyMutation($id: Int!) {
    delete_project_tweet(where: { id: { _eq: $id } }) {
      returning {
        id
        link
        description
        category
      }
    }
  }
`;

export const SUB_TWEET = gql`
  subscription MySubscription {
    project_tweet {
      id
      link
      description
      category
    }
  }
`;
