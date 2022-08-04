const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  type: { type: String, enum: ["Air Handler", "Furnace"] },
  ton: {
    type: Number,
    required: true,
    min: 1,
  },
  sqft: {
    type: Number,
    required: true,
    min: 1,
  },
  cabinet:{
    type:"string",
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
