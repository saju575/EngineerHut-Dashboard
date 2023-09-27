const express = require("express");
const {
  createOrder,

  getSingleOrder,
  getAllOrders,
  getSingleCustomerAllOrder,
} = require("../controllers/order/order.controller");

const orderRouter = express.Router();

// Routes for the Order model
orderRouter.get("/all", getAllOrders); // Get a list of all orders

orderRouter.post("/order", createOrder); // Create a new order
orderRouter.get("/:orderId", getSingleOrder); // Get order details by order ID

orderRouter.get("/customer/:customerId", getSingleCustomerAllOrder); // GET a single customer all order details

module.exports = orderRouter;
