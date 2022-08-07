const { gql } = require("apollo-server-express");

// TODO: Create type definitions for  `Product and `User` above the `Auth` type
const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    email: String
    password: String
  }
  type Estimate {
    type: String!
    ton: Int!
    description: String!
    seer: Int!
    price: Int!
  }

  type Query {
    Users: [User]
    Estimates: [Estimate]
  }
`;

module.exports = typeDefs;
