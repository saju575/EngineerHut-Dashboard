const express = require("express");
const { myOrders, newOrder } = require("../controllers/order/order.controller");

const router = express.Router();
router.route("/orders").get(myOrders);
router.route("/create/order/:id").post(newOrder);

module.exports = router;