import UserModel from "../model/user.model.js";
import ApiError from "../utils/apiError.js";
import { generateJwtSecretKey } from "../utils/tokens.js";

export const registerService = async (data) => {
  const { name, email, password } = data;

  //   validation:

  // Check empty fields
  if (!name || !email || !password) {
    throw new ApiError("All fields are required", 400);
  }

  // Name validation
  if (name.trim().length < 3) {
    throw new ApiError("Name must be at least 3 characters long", 400);
  }

  // Password validation
  if (password.length < 6) {
    throw new ApiError("Password must be at least 6 characters", 400);
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError("Invalid email", 400);
  }

  //   Check  existing user
  const isExisting = await UserModel.findOne({ email });
  if (isExisting) {
    throw new ApiError("User already registered", 409);
  }

  // create user
  const newUser = await UserModel.create({
    name,
    email,
    password,
  });

  //   token generation
  const token = generateJwtSecretKey(newUser._id, newUser.email);

  // response data
  return { newUser, token };
};

export const loginService = async (data) => {
  const { email, password } = data;

  //   validation:

  // Check empty fields
  if (!email || !password) {
    throw new ApiError("All fields are required", 400);
  }

  // Password validation
  if (password.length < 6) {
    throw new ApiError("Password must be at least 6 characters", 400);
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError("Invalid email", 400);
  }

  //   Check  existing user
  const isExisting = await UserModel.findOne({ email });
  if (!isExisting) {
    throw new ApiError("user not found", 404);
  }

  //   Check compare password
  let comparePassword = isExisting.comparePassword(password);
  if (!comparePassword) throw new ApiError("Invalid Credential", 401);

  //   token generation
  const token = generateJwtSecretKey(isExisting._id, isExisting.email);

  // response data
  return { isExisting, token };
};
