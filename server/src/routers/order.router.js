const express = require("express");
const {
  createOrder,

  getSingleOrder,
  getAllOrders,
} = require("../controllers/order/order.controller");

const orderRouter = express.Router();

// Routes for the Order model
orderRouter.get("/all", getAllOrders); // Get a list of all orders
orderRouter.post("/order", createOrder); // Create a new order
orderRouter.get("/:orderId", getSingleOrder); // Get order details by order ID

module.exports = orderRouter;
