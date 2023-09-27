const Customer = require("../../models/customer.model");
const Order = require("../../models/order.model");
const Product = require("../../models/product.model");
const { successResponse } = require("../response/response.controller");

// Define an endpoint to calculate statistics
exports.getState = async (req, res, next) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalCustomers = await Customer.countDocuments();
    const totalRevenue = await Order.aggregate([
      {
        $match: { paymentStatus: true },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$totalprice" },
        },
      },
    ]);

    const statistics = {
      totalProducts,
      totalOrders,
      totalCustomers,
      totalRevenue: totalRevenue.length > 0 ? totalRevenue[0].total : 0,
    };

    return successResponse(res, {
      payload: statistics,
    });
  } catch (err) {
    next(err);
  }
};
