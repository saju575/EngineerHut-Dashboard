const Customer = require("../../models/customer.model");
const Product = require("../../models/product.model");

// Create a new order
exports.createOrder = async (req, res, next) => {
  try {
    const {
      customer,
      customerAddress,
      items,
      totalprice,
      paymentMethod,
      orderStatus,
      paymentStatus,
    } = req.body;

    // Ensure the customer exists
    const customerExists = await Customer.findById(customer);
    if (!customerExists) {
      return res.status(404).json({ message: "Customer not found" });
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
      orderStatus,
      paymentStatus,
    });

    // Save the order
    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    next(error);
  }
};
