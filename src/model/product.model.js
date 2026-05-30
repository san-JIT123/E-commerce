import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name is too long"],
    },

    description: {
      type: String,
      default: "type Description",
      minlength: [10, "Description must be at least 10 characters"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be greater than 0"],
    },

    category: {
      type: String,
      enum: ["Men", "Women", "Kids", "Other"],
      default: "Men",
    },

    image: {
      type: [String],
      default: [],
      validate: {
        validator: function (arr) {
          return arr.length <= 5; // max 5 images
        },
        message: "You can upload maximum 5 images",
      },
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ProductModel = mongoose.model("products", productSchema);
export default ProductModel;
