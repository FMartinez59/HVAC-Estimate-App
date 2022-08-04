const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  estimateDate: {
    type: Date,
    default: Date.now
  },
  estimates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Estimate'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
