const { gql } = require("apollo-server-express");

// TODO: Create type definitions for  `Product`, `Order` and `User` above the `Auth` type
const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    email: String
    password: String
  }
  type Estimate {
    _id: ID!
    type: String!
    ton: Int!
    description: String!
    seer: Int!
    price: Int!
  }

  type Query {
    user: User
    Estimate(_id: ID!): Estimate
  }
`;

module.exports = typeDefs;
