const { gql } = require("apollo-server-express");

// TODO: Create type definitions for  `Product and `User` above the `Auth` type
const typeDefs = gql`
  type Profile {
    firstName: String
    lastName: String
    email: String
    estimate: Estimate
  }
  type Estimate {
    type: String!
    ton: Int!
    description: String!
    seer: Int!
    price: Int!
  }

  type Query {
    profiles: [Profile]
    profile(profileId: ID!): Profile
    estimate(estimateId: ID!): Estimate
  }
`;

module.exports = typeDefs;
