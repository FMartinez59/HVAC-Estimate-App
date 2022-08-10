const db = require("../config/connection");
const { Estimate } = require("../models");
const estimateSeed = require("./estimateData.json");

db.once("open", async () => {
  try {
    await Estimate.deleteMany({});
    await Estimate.create(estimateSeed);

    console.log("estimateDataSeeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
