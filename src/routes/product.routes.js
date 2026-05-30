import express from "express";
import {
  createProductController,
  getAllProductController,
  getProductByIdController,
} from "../controller/product.controller.js";
import upload from "../config/multer.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// create product
router.post(
  "/create",
  authMiddleware,
  upload.array("images", 5),
  createProductController,
);

// get all products
router.get("/all-product", authMiddleware, getAllProductController);

// get product id
router.get("/:id", getProductByIdController);

export default router;
