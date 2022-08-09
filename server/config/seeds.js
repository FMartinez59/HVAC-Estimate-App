const db = require("./connection");
const { User, Estimate } = require("../models");

db.once("open", async () => {
  await Estimate.deleteMany();

  const estimates = await Estimate.insertMany([
    // will add data here later 
  ]);

  console.log("estimates seeded");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        estimates: [estimates[0]._id, estimates[0]._id, estimates[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});