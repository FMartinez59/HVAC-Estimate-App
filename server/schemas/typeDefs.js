const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    firstName: String
    lastName: String
    email: String
    estimate: Estimate
  }
  type Estimate {
    name: String
    system: string
    tons: Int!
    description: String
    seer: Int
    price: Int
  }

  type Query {
    profiles: [Profile]
    profile(profileId: ID!): Profile
    estimate(estimateId: ID!): Estimate
  }
`;

module.exports = typeDefs;
