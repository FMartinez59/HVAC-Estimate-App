const db = require("./connection");
const { User, Product } = require("../models");

db.once("open", async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      type: "Air Handler",
      ton: 5,
      sqft: 2400,
      cabinet: "yes"
    },
    {
      type: "Furnace",
      ton: 2,
      sqft: 1400,
      cabinet: "yes"
    },
    {
      type: "Furnace",
      ton: 3,
      sqft: 2000,
      cabinet: "yes"
    },
    {
      type: "Air Handler",
      ton: 8,
      sqft: 3400,
      cabinet: "yes"
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
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
