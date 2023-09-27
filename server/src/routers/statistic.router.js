const express = require("express");
const { getState } = require("../controllers/statistic/statistic.controller");

const statisticRouter = express.Router();

statisticRouter.get("/summery", getState);

module.exports = statisticRouter;
