const db = require("../config/connection");
const { Estimate,Profile } = require("../models");
const estimateSeed = require("./estimateData.json");
const profileSeed = require("./profileData.json");

db.once("open", async () => {
  try {
    await Estimate.deleteMany({});
    await Estimate.create(estimateSeed);
    await Profile.deleteMany({});
    await Profile.create(profileSeed);

    console.log("Profiles and Estimates Succesfully Seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
