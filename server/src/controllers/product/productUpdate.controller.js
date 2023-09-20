const Product = require("../../models/product.model");
const {
  successResponse,
  errorResponse,
} = require("../response/response.controller");
const { updateImages } = require("../../services/imgUploadToFirebase.service");

exports.productUpdate = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { updatedData, updatedImages } = req.body;

    // Update the product details in the database (e.g., name, description, price, etc.)
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );

    // If you have updated images, upload them to Firebase and get the updated image URLs.
    let updatedImageUrls = [];

    if (updatedImages && updatedImages.length > 0) {
      updatedImageUrls = await updateImages(updatedImages);
    }

    // Update the product's image URLs with the new ones if needed.
    if (updatedImageUrls.length > 0) {
      // Here, you can specify which image you want to update by index.
      // For example, to update the first image among multiple images:
      // updatedProduct.images[0] = updatedImageUrls[0].url;
      // To update the second image:
      // updatedProduct.images[1] = updatedImageUrls[1].url;
      // and so on...
      // If you want to update all images together, you can replace the entire "images" array:
      updatedProduct.images = updatedImageUrls.map((image) => image.url);
    }

    // Save the updated product details in the database.
    const savedProduct = await updatedProduct.save();

    return successResponse(res, {
      message: "Product updated successfully",
      payload: savedProduct,
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: "Failed to update product.",
    });
  }
};
