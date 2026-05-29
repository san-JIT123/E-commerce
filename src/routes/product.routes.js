import express from "express";
import { createProductController } from "../controller/product.controller.js";

const router = express.Router();

router.post("/create", createProductController);
export default router;
