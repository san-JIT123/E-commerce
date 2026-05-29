import mongoose from "mongoose";
import bcrypt from "bcrypt";

//  User schema
const userSchema = new mongoose.Schema(
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

// password hashing middleware
userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error;
  }
});

// user model create
const UserModel = mongoose.model("users", userSchema);

export default UserModel;
