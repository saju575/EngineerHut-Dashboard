const Order = require("../../models/customer.model");

// create new order 
exports.newOrder = async (req,res,next) => {
    const {
        shippingAddress,
        orders,
        paymentMethod,
        orderStatus,
        paymentStatus,
    } = req.body;

    const order = await Order.create({
        shippingAddress,
        orders,
        orderDate: Date.now(),
        paymentMethod,
        orderStatus,
        paymentStatus,
        customer: req.params.id,
    });

    res.status(201).json({
        success: true,
        order
    });
};

//Individual customer's order list
//See all orders by ID
exports.myOrders = async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );

    if (!order) {
        return next(new ErrorHandler("Order not found with this ID", 404));
    }

    res.status(200).json({
        success: true,
        order
    });
};
