const Customer = require("../../models/customer.model");
const Order = require("../../models/order.model");
const Product = require("../../models/product.model");
const { successResponse } = require("../response/response.controller");

// Create a new order
exports.createOrder = async (req, res, next) => {
  try {
    const { customer, customerAddress, items, totalprice, paymentMethod } =
      req.body;

    // Ensure the customer exists
    const customerExists = await Customer.findById(customer);
    if (!customerExists) {
      throw new Error("Customer not found");
    }

    // Validate and retrieve product details for each item
    const itemDetails = [];
    for (const item of items) {
      const product = await Product.findById(item.product_id);
      if (!product) {
        throw new Error("Product not found");
      }
      itemDetails.push({
        product_id: product._id,
        quantity: item.quantity,
      });
    }

    // Create the order
    const order = new Order({
      customer: customerExists._id,
      customerAddress,
      items: itemDetails,
      totalprice,
      paymentMethod,
    });

    // Save the order
    const savedOrder = await order.save();

    return successResponse(res, {
      message: "Order created successfully",
      payload: savedOrder,
    });
  } catch (error) {
    next(error);
  }
};

/* 
    GET all orders with search parameters
*/

exports.getAllOrders = async (req, res, next) => {
  try {
    // Pagination options
    const page = parseInt(req.query.page) || 1; // Current page, default is 1
    const limit = parseInt(req.query.limit) || 10; // Number of items per page, default is 10

    // Search query options
    const searchQuery = req.query.search || "";

    // Define a regular expression for case-insensitive search
    const regex = new RegExp(searchQuery, "i");

    // Query to retrieve orders with pagination
    const query = Order.find({
      $or: [
        { orderId: regex }, // Search by order ID
        {
          $or: [
            { "customer.firstName": regex }, // Search by customer's first name
            { "customer.lastName": regex }, // Search by customer's last name
          ],
        },
        { paymentMethod: regex }, // Search by payment method
      ],
    })
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .skip((page - 1) * limit) // Skip records for pagination
      .limit(limit) // Limit records per page
      .populate("customer") // Populate entire customer information
      .populate({
        path: "items.product_id",
        model: "Product", // Populate entire product information
      });

    // Execute the query
    const orders = await query.exec();

    // Count total matching records for pagination
    const totalRecords = await Order.countDocuments({
      $or: [
        { orderId: regex },
        {
          $or: [
            { "customer.firstName": regex },
            { "customer.lastName": regex },
          ],
        },
        { paymentMethod: regex },
      ],
    });

    // return the success response
    return successResponse(res, {
      payload: {
        total: totalRecords,
        perPage: limit,
        currentPage: page,
        totalPages: Math.ceil(totalRecords / limit),
        start: (page - 1) * limit + 1,
        end: limit > totalRecords ? totalRecords : limit,
        data: orders,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* 
 GET a single order by order ID 
 */
exports.getSingleOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;

    // Find the order by order ID and populate customer and product information
    const order = await Order.findOne({ orderId })
      .populate("customer") // Populate entire customer information
      .populate({
        path: "items.product_id",
        model: "Product", // Populate entire product information
      });

    if (!order) {
      throw new Error("Order not found");
    }

    return successResponse(res, {
      message: "Order found successfully",
      payload: order,
    });
  } catch (error) {
    next(error);
  }
};
