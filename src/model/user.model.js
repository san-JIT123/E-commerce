import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      minlength: 6,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

let UserModel = mongoose.model("users", userSchema);

export default UserModel;
