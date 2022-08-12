const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    Name: String
    email: String
    estimate: Estimate
  }
  type Estimate {
    name: String
    system: String
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
