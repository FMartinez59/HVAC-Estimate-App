const { AuthenticationError } = require('apollo-server-express');
const { User, Estimate } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    Estimates: async () => {
      // Get and return all documents from the users collection
      return await Estimate.find({});
    }
  }
};

module.exports = resolvers;

