const { gql } = require("apollo-server-express");

// TODO: Create type definitions for  `Product`, `Order` and `User` above the `Auth` type
const typeDefs = gql`
  type Auth {
    token: ID
    user: User
  }

  type Query {
  Product( 
      type: String!
      ton: Int!
      sqft: Int!
      cabinet: String!
      ):
  }

  type User {
    firstName: String
    lastName: String
    email: String
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
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
