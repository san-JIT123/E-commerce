import express from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getCategoryController,
  getProductByIdController,
  updateProductController,
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

// update product
router.put(
  "/update/:id",
  authMiddleware,
  upload.array("images", 5),
  updateProductController,
);

// delete product
router.delete("/delete/:id", authMiddleware, deleteProductController);

// category product
router.get("/", getCategoryController);
export default router;
