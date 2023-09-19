// //   numOfReviews: {
// //     type: Number,
// //     default: 0,
// //   },
// //   reviews: [
// //     {
// //       user: {
// //         type: mongoose.Schema.ObjectId,
// //         ref: "User",
// //         required: true,
// //       },
// //       name: {
// //         type: String,
// //         required: true,
// //       },
// //       rating: {
// //         type: Number,
// //         required: true,
// //       },
// //       comment: {
// //         type: String,
// //         required: true,
// //       },
// //     },
// //   ],

// //   user: {
// //     type: mongoose.Schema.ObjectId,
// //     ref: "User",
// //     required: true,
// //   }

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter product Name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    shippingFee: {
      type: Number,
      required: [true, "Please Enter Shipping Fee"],
      maxLength: [8, "Shipping fee cannot exceed 8 characters"],
    },
    taxRate: {
      type: Number,
      required: [true, "Please Enter Tax Rate"],
      maxLength: [8, "Tax Rate cannot exceed 8 characters"],
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    brand: {
      type: String,
    },
    stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    color: {
      type: String,
    },
    weight: {
      type: Number,
    },
    size: {
      type: String,
      enum: ["MM", "XL", "MX", "SM", "2XL", "3XL", "L"], // Allowed values for size
      required: [
        true,
        "Please Enter a valid Size (MM, XL, MX, SM, 2XL, 3XL, L)",
      ],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0, // Minimum rating value
      max: 5, // Maximum rating value
      required: [true, "Rating must be between 0 and 5"],
    },
    sku: {
      type: String,
      required: [true, "Please Enter SKU Number as String"],
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
