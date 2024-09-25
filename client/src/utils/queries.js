import { gql } from '@apollo/client';

// Query to get rooms
export const GET_ROOMS = gql`
  query GetRooms {
    getRooms {
      id
      volume
      description
      savings
    }
  }
`;

// Query to get user details
export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      username
      email
    }
  }
`;
