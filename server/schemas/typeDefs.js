const typeDefs = gql`
  # User Type
  type User {
    id: ID!
    username: String!
    email: String!
  }

  # Room Type
  type Room {
    id: ID!
    length: Float!
    width: Float!
    height: Float!
    savings: Float!
    user: User!
  }

  # Auth Payload for returning token and user on login/register
  type AuthPayload {
    token: String!
    user: User!
  }

  # Queries
  type Query {
    getUser: User!
    getRooms: [Room!]!
  }

  # Mutations
  type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addRoom(length: Float!, width: Float!, height: Float!, savings: Float!): Room!
    updateRoom(id: ID!, length: Float, width: Float,height: Float!, savings: Float): Room!
    deleteRoom(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;

