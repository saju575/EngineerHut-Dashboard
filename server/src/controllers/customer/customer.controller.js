const createHttpError = require("http-errors");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Customer = require("../../models/customer.model");
const {
  JWT_ACTIVATION_KEY,
  CLIENT_URL,
  JWT_ACCESS_KEY,
} = require("../../secret");
const { findWithId } = require("../../services/findItem.service");
const { createJWTToken } = require("../../utils/jwt.util");
const { emailWithNodeMailer } = require("../../utils/nodeMailer.util");
const { successResponse } = require("../response/response.controller");
const Token = require("../../models/token.model");

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

/* 
  get single customer
*/
exports.getCustomers = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await findWithId(Customer, customerId);

    if (!customer) {
      throw new Error("Customer not found");
    }

    // return product
    return successResponse(res, {
      message: "Customer found",
      payload: customer,
    });
  } catch (error) {
    next(error);
  }

  const customer = await Customer.findById(req.params.id);
  res.status(200).json({
    success: true,
    customer,
  });
};

/* 
  get all customers
*/
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

// process email registration for post request
exports.procesRegister = async (req, res, next) => {
  try {
    //destructure all registration data

    const { firstName, lastName, email, password } = req.body;

    //check user already exist or not

    const userExists = await Customer.exists({ email });
    if (userExists) {
      throw createHttpError(
        409,
        "User with this email already exists. Please sign in."
      );
    }

    // // create jwt token
    const jwtToken = createJWTToken(
      {
        firstName,
        lastName,
        email,
        password,
      },
      JWT_ACTIVATION_KEY,
      "59m"
    );

    const token = await new Token({
      token: crypto.randomBytes(32).toString("hex"),
      jwtToken,
    }).save();

    // prepare email
    const emailData = {
      email,
      subject: `Account Activation Email`,
      html: `
      <h2>Hello ${firstName} ${lastName}</h2>
      <p>Please click here to 
      <a href="${CLIENT_URL}/users/${token._id}/verify/${token.token}" target="_blank">activate your account</a>
      </p>
      `,
    };
    // send email with nodemail

    try {
      await emailWithNodeMailer(emailData);
    } catch (emailError) {
      next(createHttpError(500, "Failed to send varification email"));
      return;
    }

    // return success response

    return successResponse(res, {
      statusCode: 200,
      message: `An Email sent to your account please verify`,
    });
  } catch (error) {
    next(error);
  }
};

// activate user registration data store into database
exports.activateUserAccount = async (req, res, next) => {
  try {
    // const user = await Customer.findOne({ _id: req.params.id });
    // if (!user) {
    //   throw new Error("Invalid link");
    // }

    const token = await Token.findOne({
      _id: req.params.id,
      token: req.params.token,
    });
    if (!token) {
      throw new Error("Invalid link");
    }

    const decodedInfo = jwt.verify(token.jwtToken, JWT_ACTIVATION_KEY);

    if (!decodedInfo) {
      throw new Error("Invalid link");
    }

    await Customer.create(decodedInfo);

    await Token.deleteOne({ userId: req.params.id, token: req.params.token });
    // return success response

    return successResponse(res, {
      statusCode: 201,
      message: `Email verified successfully`,
    });
  } catch (error) {
    next(error);
  }
};

exports.handleLogin = async (req, res, next) => {
  try {
    // work flow
    // email, password
    const { email, password } = req.body;
    // isExist the email in DB
    const user = await Customer.findOne({ email: email }).select("+password");

    if (!user) {
      throw createHttpError(404, "User not found.Please register first.");
    }
    // compare the password

    const isPasswordsMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordsMatch) {
      throw createHttpError(401, "Email/password mismatch");
    }

    const data = { ...user._doc, password: undefined };
    // token, cookie

    const accessToken = createJWTToken(data, JWT_ACCESS_KEY, "24h");

    // set cookies
    res.cookie("accessToken", accessToken, {
      maxAge: 60 * 60 * 24 * 1 * 1000,
      // httpOnly: true,
      // sameSite: "none",
      path: "/",
    });

    // successful response
    return successResponse(res, {
      statusCode: 200,
      message: "User were logged in successfully",
      payload: {
        user: { ...user._doc, password: undefined },
        accessToken: accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Logout

exports.handleLogout = async (req, res, next) => {
  try {
    //clear cookies
    res.clearCookie("accessToken");
    // successful response
    return successResponse(res, {
      statusCode: 200,
      message: "User logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.userProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const user = await findWithId(Customer, userId);

    return successResponse(res, {
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};
