import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connectDB....");
  } catch (error) {
    console.log("mongoose error", error);
  }
};

export default connectDB;
