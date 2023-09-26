const Customer = require("../../models/customer.model");
const { successResponse } = require("../response/response.controller");

exports.createCustomer = async (req, res, next) => {
  try {
    const {
      image,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phone,
      email,
      country,
    } = req.body;

    const customerData = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phone,
      email,
      country,
    };

    if (image) {
      customerData.image = image;
    }
    const customer = await Customer.create(customerData);

    return successResponse(res, {
      message: "Customer created successfully",
      payload: customer,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCustomers = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.status(200).json({
    success: true,
    customer,
  });
};

exports.getAllCustomers = async (req, res, next) => {
  try {
    const searchQuery = req.query.search;
    const page = parseInt(req.query.page) || 1; // Get the page number or default to 1
    const perPage = parseInt(req.query.perPage) || 10; // Get the number of items per page or default to 10

    // Calculate the skip value based on the page and perPage
    const skip = (page - 1) * perPage;

    let customersQuery;

    if (searchQuery) {
      customersQuery = Customer.find({
        $or: [
          { firstName: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search in name
          { lastName: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search in description
          { email: { $regex: searchQuery, $options: "i" } },
          { country: { $regex: searchQuery, $options: "i" } },
          // { joinDate: { $regex: searchQuery, $options: "i" } },
        ],
      });
    } else {
      customersQuery = Customer.find();
    }

    // Clone the query for totalCount
    const totalCountQuery = customersQuery.clone();

    // Apply pagination using the skip and limit methods
    const totalCount = await totalCountQuery.countDocuments();

    // get all customers
    const customers = await customersQuery.skip(skip).limit(perPage);

    // return the success response
    return successResponse(res, {
      message: "Customers retrieved successfully.",
      payload: {
        total: totalCount,
        perPage,
        currentPage: page,
        totalPages: Math.ceil(totalCount / perPage),
        start: skip + 1,
        end: perPage > totalCount ? totalCount : perPage,
        data: customers,
      },
    });
  } catch (error) {
    next(error);
  }
};
