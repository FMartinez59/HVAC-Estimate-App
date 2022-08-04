const { gql } = require("apollo-server-express");

// TODO: Create type definitions for  `Product`, `Order` and `User` above the `Auth` type
const typeDefs = gql`
  type Auth {
    token: ID
    user: User
  }

  type Estimate {
    _id: ID
    type: String!
    ton: Int!
    description: Int!
    seer: Int!
  }
  type Order {
    _id: ID
    purchaseDate: String
    estimates: [Estimate]
  }
  type User {
    firstName: String
    lastName: String
    email: String
  }
  type Query {
    user: User
    order(_id: ID!): Order
    Estimate(_id: ID!): Estimate
  }
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateEstimate(_id: ID!, quantity: Int!): Estimate
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
