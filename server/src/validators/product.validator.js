const Joi = require("joi");
const {
  errorResponse,
} = require("../controllers/response/response.controller");

/* 
    request body schema validation for Product create
*/

const productValidationSchema = Joi.object({
  name: Joi.string().required().trim().messages({
    "any.required": "Please Enter product Name",
  }),
  description: Joi.string().required().messages({
    "any.required": "Please Enter product Description",
  }),
  price: Joi.number().required().max(99999999).messages({
    "any.required": "Please Enter product Price",
    "number.max": "Price cannot exceed 8 characters",
  }),
  // mainPrice: Joi.number().required().max(99999999).messages({
  //   "any.required": "Please Enter product main Price",
  //   "number.max": "Price cannot exceed 8 characters",
  // }),
  discountPrice: Joi.number().max(99999999).messages({
    "number.max": "Price cannot exceed 99,999,999",
  }),
  shippingFee: Joi.number().required().max(99999999).messages({
    "any.required": "Please Enter Shipping Fee",
    "number.max": "Shipping fee cannot exceed 8 characters",
  }),
  taxRate: Joi.number().required().max(99).messages({
    "any.required": "Please Enter Tax Rate",
    "number.max": "Tax Rate cannot exceed 2 characters",
  }),
  category: Joi.string().required().messages({
    "any.required": "Please Enter Product Category",
  }),
  brand: Joi.string().required().messages({
    "any.required": "Please Enter Product Brand",
  }),
  stock: Joi.number().required().max(9999).default(1).messages({
    "any.required": "Please Enter product Stock",
    "number.max": "Stock cannot exceed 4 characters",
  }),
  color: Joi.string(),
  weight: Joi.number(),
  size: Joi.string()
    .valid("M", "XL", "MX", "SM", "2XL", "3XL", "L")
    .required()
    .messages({
      "any.required": "Please Enter a valid Size (MM, XL, MX, SM, 2XL, 3XL, L)",
      "any.only": "Please Enter a valid Size (MM, XL, MX, SM, 2XL, 3XL, L)",
    }),
  rating: Joi.number().min(0).max(5).default(0),
  sku: Joi.string().required().messages({
    "any.required": "Please Enter SKU Number as String",
  }),
});

/* 
    Middleware functions for product creation body request
*/
exports.validateCreateProductRequestBody = (req, res, next) => {
  try {
    //validate productValidationSchema schema
    const { error } = productValidationSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return errorResponse(res, {
        statusCode: 422,
        message: error.details[0].message,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

/* 
  Define a validation schema for the query parameters to get products
*/
const productQuerySchema = Joi.object({
  search: Joi.string(),
  page: Joi.number().integer().min(1),
  perPage: Joi.number().integer().min(1),
  minPrice: Joi.number().min(0),
  maxPrice: Joi.number().min(0),
  category: Joi.string(),
  brand: Joi.string(),
  size: Joi.string(),
});

/* 
  Middleware function for this get all products quere validation
*/

exports.validateGetProductsQueryBody = (req, res, next) => {
  try {
    //validate product Query Validation Schema
    const { error } = productQuerySchema.validate(req.query, {
      abortEarly: false,
    });

    if (error) {
      return errorResponse(res, {
        statusCode: 422,
        message: error.details[0].message,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
