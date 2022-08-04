const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  type: { type: String, enum: ["Air Handler", "Furnace"] },
  ton: {
    type: Number,
    required: true,
    min: 1,
  },
  description: {
    type: String,
    required: true,
  },
  seer: {
    type: Number,
    required: true,
    min: 1,
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
