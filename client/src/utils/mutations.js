import { gql } from "@apollo/client";

// Mutation to add a new room
export const ADD_ROOM = gql`
  mutation AddRoom($volume: Float!, $description: String!, $savings: Float!) {
    addRoom(volume: $volume, description: $description, savings: $savings) {
      id
      volume
      description
      savings
    }
  }
`;

// Mutation to update a room
export const UPDATE_ROOM = gql`
  mutation Mutation(
    $id: ID!
    $volume: Float
    $description: String
    $savings: Float
  ) {
    updateRoom(
      _id: $id
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
