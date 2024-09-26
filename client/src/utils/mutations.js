import { gql } from "@apollo/client";

// Mutation to add a new room
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

// Mutation to update a room
export const UPDATE_ROOM = gql`
mutation UpdateRoom($updateRoomId: ID!, $volume: Float, $description: String, $savings: Float) {
  updateRoom(id: $updateRoomId, volume: $volume, description: $description, savings: $savings) {
    id
    volume
    description
    savings
    user {
      id
      username
      email
    }
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
