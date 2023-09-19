const uuid = require("uuid"); // Import the uuid library
const { successResponse } = require("../response/response.controller");
const Product = require("../../models/product.model");

exports.productCreate = async (req, res, next) => {
  try {
    const { imageUrls } = req;

    if (imageUrls.length === 0) {
      throw new Error("Image are required");
    }

    // create a new array of images with the unique id.
    // const imagesWithUniqeIds = imageUrls.map((imageUrl) => {
    //   return {
    //     img_id: uuid.v4(), // Generate a unique public_id using uuid
    //     url: imageUrl,
    //   };
    // });

    // destructering the value from req.body
    const {
      name,
      description,
      price,
      shippingFee,
      taxRate,
      category,
      stock,
      size,
      sku,
      color,
      rating,
      weight,
      brand,
    } = req.body;

    // make the product data
    const productData = {
      name,
      description,
      price,
      shippingFee,
      taxRate,
      category,
      stock,
      size,
      sku,
      images: imageUrls,
    };

    //check the optional fields are given or not. Tf given then add it to the productData object
    if (color !== undefined) {
      productData.color = color;
    }
    if (rating !== undefined) {
      productData.rating = rating;
    }
    if (brand !== undefined) {
      productData.brand = brand;
    }
    if (weight !== undefined) {
      productData.weight = weight;
    }

    // Create a new product instance using the productData
    const newProduct = new Product(productData);

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // return success response

    return successResponse(res, {
      message: "New Product uploaded successfully",
      payload: savedProduct,
    });
  } catch (error) {
    next(error);
  }
};
