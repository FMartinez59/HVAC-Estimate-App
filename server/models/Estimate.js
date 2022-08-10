const { Schema, model } = require('mongoose');

const estimateSchema = new Schema({
  name: {
     type: String
    },
    system: {
      type: String,
      required: true
    },
  tons: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    max: 100
  },
  seer: {
    type: Number
    
  },
  price: {
    type: Number
    
  }
});

const Estimate = model('Estimate', estimateSchema);

module.exports = Estimate;
