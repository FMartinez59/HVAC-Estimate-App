const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    name: String
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

  type Mutation {
    addProfile(name: String, email: String, password: String): Profile
    removeProfile(name: String, email: String, password: String): Profile
    addEstimate(name: String, system: String, tons: Int, description: String, seer: Int, price: Int): Estimate
    removeEstimate(name: String, system: String, tons: Int, description: String, seer: Int, price: Int): Estimate
  }
`;

module.exports = typeDefs;
