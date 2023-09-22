const { successResponse } = require("../response/response.controller");
const Product = require("../../models/product.model");
const { findWithId } = require("../../services/findItem.service");
const {
  imageDeleteFromFirebase,
} = require("../../services/imgDeleteFromFirebase.service");

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
      mainPrice,
      discountPrice,
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
      mainPrice,
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
    if (discountPrice !== undefined) {
      productData.discountPrice = discountPrice;
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

exports.removeProduct = async (req, res, next) => {
  try {
    // get the id
    const productId = req.params.id;

    // find the product
    const product = await findWithId(Product, productId);

    if (!product) {
      throw new Error("Product  not found");
    }

    //delete the product image from the firebase store
    for (const image of product.images) {
      await imageDeleteFromFirebase(image.url);
    }

    //delete the product

    await Product.findByIdAndDelete({ _id: productId });
    //return response
    return successResponse(res, { message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

/* 
   controller to get products with global search and filtering options
*/

exports.getProductsController = async (req, res, next) => {
  try {
    const filters = {};
    const searchQuery = req.query.search;
    const page = parseInt(req.query.page) || 1; // Get the page number or default to 1
    const perPage = parseInt(req.query.perPage) || 10; // Get the number of items per page or default to 10

    // Calculate the skip value based on the page and perPage
    const skip = (page - 1) * perPage;

    // Apply filters based on query parameters
    if (req.query.minPrice) {
      filters.price = { $gte: parseFloat(req.query.minPrice) };
    }
    if (req.query.maxPrice) {
      filters.price = {
        ...filters.price,
        $lte: parseFloat(req.query.maxPrice),
      };
    }
    if (req.query.category) {
      filters.category = req.query.category;
    }
    if (req.query.brand) {
      filters.brand = req.query.brand;
    }
    if (req.query.size) {
      filters.size = req.query.size;
    }

    // You can add more filters based on your schema fields

    let productsQuery;

    if (searchQuery) {
      productsQuery = Product.find({
        $or: [
          { name: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search in name
          { description: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search in description
          { sku: { $regex: searchQuery, $options: "i" } },
        ],
        ...filters,
      });
    } else {
      productsQuery = Product.find(filters);
    }

    // Clone the query for totalCount
    const totalCountQuery = productsQuery.clone();

    // Apply pagination using the skip and limit methods
    const totalCount = await totalCountQuery.countDocuments();

    // const totalCount = await productsQuery.countDocuments();
    const products = await productsQuery.skip(skip).limit(perPage);

    // return the success response
    return successResponse(res, {
      payload: {
        total: totalCount,
        perPage,
        currentPage: page,
        totalPages: Math.ceil(totalCount / perPage),
        data: products,
      },
    });
  } catch (error) {
    next(error);
  }
};
