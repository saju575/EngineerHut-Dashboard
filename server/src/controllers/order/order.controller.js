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

    // Find orders based on order criteria (order ID, payment method, etc.)
    const orderCriteriaQuery = Order.find({
      $or: [{ orderId: regex }, { paymentMethod: regex }],
    });
    // Find orders based on customer name (first name or last name)
    const customerNameQuery = Order.find({
      customer: {
        $in: await Customer.find({
          $or: [{ firstName: regex }, { lastName: regex }],
        }).distinct("_id"),
      },
    });

    // Combine the two queries using $or
    const combinedQuery = {
      $or: [orderCriteriaQuery.getQuery(), customerNameQuery.getQuery()],
    };

    // Execute the combined query to retrieve orders
    const orders = await Order.find(combinedQuery)
      .populate("customer") // Populate entire customer information
      .populate({
        path: "items.product_id",
        model: "Product", // Populate entire product information
      })
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .skip((page - 1) * limit) // Skip records for pagination
      .limit(limit); // Limit records per page

    // Count total matching records for pagination based on the search criteria
    const totalRecords = await Order.countDocuments(combinedQuery);

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
    const order = await Order.findOne({ _id: orderId })
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

// Define a route to get all orders for a specific customer with product details (name, price, and discount price)
exports.getSingleCustomerAllOrder = async (req, res, next) => {
  try {
    const customerId = req.params.customerId;

    // Find the customer by their ID
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Find all orders associated with the customer's ID and populate the specific fields from the Product model
    const orders = await Order.find({ customer: customerId })
      .populate({
        path: "items.product_id",
        model: "Product",
        select: "name price discountPrice", // Specify the fields you want to retrieve from the Product model
      })
      .sort({ createdAt: -1 })
      .exec();

    return successResponse(res, {
      payload: orders,
    });
  } catch (error) {
    next(error);
  }
};

/* 

get order list based on days
 */
exports.getLetestOrders = async (req, res, next) => {
  try {
    const days = req.query.days || 1;

    const dateFilter = new Date();
    dateFilter.setDate(dateFilter.getDate() - parseInt(days));
    const latestOrders = await Order.find({
      order_date: { $gte: dateFilter },
    })
      .sort({ order_date: -1 })
      .populate({
        path: "items.product_id",
        model: Product,
        select: "name images", // Select the fields you want to retrieve for products
      })
      .populate({
        path: "customer",
        model: Customer,
        select: "image firstName lastName", // Select the fields you want to retrieve for customers
      })
      .exec();

    return successResponse(res, {
      payload: latestOrders,
    });
  } catch (err) {
    next(err);
  }
};
