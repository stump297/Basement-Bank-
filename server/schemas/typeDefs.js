const typeDefs = `
  # User Type
  type User {
    id: ID!
    username: String!
    email: String!
  }

  # Room Type
  type Room {
    id: ID!
    volume: Float!
    description: String!
    savings: Float!
    user: User!
  }

  # Auth Payload for returning token and user on login/register
  type AuthPayload {
    token: ID!
    user: User
  }

  # Queries
  type Query {
    getUser: User!
    getRooms: [Room!]!
  }

  # Mutations
  type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    addRoom(volume: Float!, description: String!, savings: Float!): Room
    updateRoom(id: ID!, volume: Float, description: String, savings: Float): Room
    deleteRoom(id: ID!): Boolean
  }
`;

module.exports = typeDefs;

