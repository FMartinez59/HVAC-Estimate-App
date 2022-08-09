const mongoose = require("mongoose");

const { Schema } = mongoose;

const estimateSchema = new Schema({
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
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  }
});

const Estimate = mongoose.model("Estimate", estimateSchema);

module.exports = Estimate;
