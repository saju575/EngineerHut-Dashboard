const express = require("express");
const { getCustomers, createCustomer } = require("../controllers/customer/customer.controller");

const router = express.Router();
router.route("/customers/:id").get(getCustomers);
router.route("/create/customer").post(createCustomer);

module.exports = router;