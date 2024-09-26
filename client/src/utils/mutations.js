import { gql } from "@apollo/client";

export const ADD_ROOM = gql`
  mutation AddRoom(
    $volume: Float!
    $description: String!
    $savings: Float!
  ) {
    addRoom(
      volume: $volume
      description: $description
      savings: $savings
    ) {
      id
      volume
      description
      savings
    }
  }
`;  

export const UPDATE_ROOM = gql`
  mutation UpdateRoom(
    $id: ID!
    $savings: Float
  ) {
    updateRoom(
      id: $id
      savings: $savings
    ) {
      id
      savings
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_User = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      user {
        username
      }
    }
  }
`;
