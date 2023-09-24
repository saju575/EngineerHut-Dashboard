const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderid: {
    type: Number,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  ishowed: {
    type: Boolean,
    default: false,
    required: true,
  },
  customerImage: {
    type: String,
    required: false, // Assuming it's not always required
  },
  order: [
    {
      productName: {
        type: String,
        required: true,
      },
      productImage: {
        type: String,
        required: true,
      },
      productPrice: {
        type: Number,
        required: true,
      },
      productId: {
        type: String,
        required: true,
      },
      itemTotal: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
  ],
  orderDate: {
    type: Date,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
