import { gql } from '@apollo/client';

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

export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      username
      email
    }
  }
`;
