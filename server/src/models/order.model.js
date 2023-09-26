const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true, // Ensure uniqueness of order IDs
      default: uuidv4, // Use uuidv4() as the default value
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer", // Reference to the Customer model
      required: true,
    },

    customerAddress: {
      type: String,
      required: true,
    },

    items: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model
        },
        quantity: Number,
      },
    ],
    order_date: {
      type: Date,
      default: Date.now,
    },
    totalprice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: Boolean,
      default: false,
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
