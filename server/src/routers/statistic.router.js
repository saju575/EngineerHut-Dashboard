const express = require("express");
const { getState } = require("../controllers/statistic/statistic.controller");
const {
  getBestSellingProducts,
} = require("../controllers/product/product.controller");

const statisticRouter = express.Router();

statisticRouter.get("/summery", getState);

/* 
  Route to get the best selling products
*/
statisticRouter.get("/product/best-sells", getBestSellingProducts);

module.exports = statisticRouter;
