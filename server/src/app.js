const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");

const { errorResponse } = require("./controllers/response/response.controller");
const productRouter = require("./routers/product.router");
const customerRouter = require("./routers/customer.router");
const orderRouter = require("./routers/order.router");
const statisticRouter = require("./routers/statistic.router");
const userRouter = require("./routers/user.route");

/* 
    making express app
*/
const app = express();

/* 
    default middlewares
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* 
    all API entry endpoints
*/

/* 
  products endpoints
*/
app.use("/api/v1/products", productRouter);

app.use("/api/v1/customers", customerRouter);

app.use("/api/v1/orders", orderRouter);

app.use("/api/v1/statistics", statisticRouter);

app.use("/api/v1/", userRouter);

/*
    Client error handler
 */
app.use((req, res, next) => {
  next(createHttpError(404, "Route Not Found"));
});

/*
    Server error handler
    -> all the error comes here
*/
app.use((err, req, res, next) => {
  return errorResponse(res, { statusCode: err.status, message: err.message });
});

/* 
    exporting express app
*/
module.exports = app;
