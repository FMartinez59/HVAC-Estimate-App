const db = require('../config/connection');
const { Estimate} = require('../models');

const estimateSeed = require('./estimateData.json');

db.once('open', async () => {
 await Estimate.deleteMany({});
 await Estimate.create(thoughtSeeds);

  console.log('estimateDataSeeded!');
  process.exit(0);
});
