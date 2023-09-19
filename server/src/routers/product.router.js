const express = require("express");
const { uploadMultiple } = require("../middlewares/multer.middleware");
const { uploadImage } = require("../middlewares/uploadImage.middleware");
const {
  productCreate,
  removeProduct,
} = require("../controllers/product/product.controller");
const {
  validateCreateProductRequestBody,
} = require("../validators/product.validator");

/* 
    create a new product router
*/
const productRouter = express.Router();

// here all product related method will implement using productRouter example GET,POST etc.

/* 
    create a new product router POST method
*/
productRouter.post(
  "/product",
  uploadMultiple,
  validateCreateProductRequestBody,
  uploadImage,
  productCreate
);

/* 
    delete product using DELETE method
*/
productRouter.delete("/product/:id", removeProduct);

/* 
    exporting the product router
*/
module.exports = productRouter;
