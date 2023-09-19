const {
  successResponse,
  errorResponse,
} = require("../response/response.controller");
const Product = require("../../models/product.model");

exports.updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params; // Get the product ID from the route parameters

    // Find the product by ID
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Product not found",
      });
    }

    // Update product details
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

    // Update product properties
    existingProduct.name = name || existingProduct.name;
    existingProduct.description = description || existingProduct.description;
    existingProduct.price = price || existingProduct.price;
    existingProduct.shippingFee = shippingFee || existingProduct.shippingFee;
    existingProduct.taxRate = taxRate || existingProduct.taxRate;
    existingProduct.category = category || existingProduct.category;
    existingProduct.stock = stock || existingProduct.stock;
    existingProduct.size = size || existingProduct.size;
    existingProduct.sku = sku || existingProduct.sku;
    existingProduct.color = color || existingProduct.color;
    existingProduct.rating = rating || existingProduct.rating;
    existingProduct.weight = weight || existingProduct.weight;
    existingProduct.brand = brand || existingProduct.brand;

    // Update product images if provided
    if (req.imageUrls && req.imageUrls.length > 0) {
      existingProduct.images = req.imageUrls;
    }

    // Save the updated product to the database
    const updatedProduct = await existingProduct.save();

    return successResponse(res, {
      message: "Product updated successfully",
      payload: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};
