const express = require("express");
const router = express.Router();
const {
  getCustomers,
  createCustomer,
  getAllCustomers,
} = require("../controllers/customer/customer.controller");

const customerRouter = express.Router();

customerRouter.post("/customer", createCustomer);
customerRouter.get("/:id", getCustomers);
customerRouter.get("/customer/allcustomers", getAllCustomers);
module.exports = customerRouter;
