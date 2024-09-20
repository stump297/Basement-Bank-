import { gql } from '@apollo/client';

// Mutation to add a new room
export const ADD_ROOM = gql`
  mutation AddRoom($length: Float!, $width: Float!, $height: Float!, $savings: Float!) {
    addRoom(length: $length, width: $width, height: $height, savings: $savings) {
      id
      length
      width
      height
      savings
    }
  }
`;

// Mutation to update a room
export const UPDATE_ROOM = gql`
  mutation UpdateRoom($id: ID!, $length: Float, $width: Float, $height: Float, $savings: Float) {
    updateRoom(id: $id, length: $length, width: $width, height: $height, savings: $savings) {
      id
      length
      width
      height
      savings
    }
  }
`;

export const ADD_User = gql`  
mutation Register($username: String!, $email: String!, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    username
    email
    password
  }
}
`;