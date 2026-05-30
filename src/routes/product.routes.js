import express from "express";
import { createProductController } from "../controller/product.controller.js";
import upload from "../config/multer.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  upload.array("images", 5),
  createProductController,
);
export default router;
