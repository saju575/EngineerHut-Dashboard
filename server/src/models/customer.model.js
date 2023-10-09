const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the Customer schema
const customerSchema = new mongoose.Schema({
  image: {
    type: String,
    // required: true,
    default:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    // required: true,
    default: "Male",
  },
  phone: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  country: {
    type: String,
    // required: true,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    require: [true, "User password is required"],
    minlength: [3, "User password length must be greater than 3 characters"],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// Create the Customer model
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
