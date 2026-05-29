import express from "express";
import {
  loginController,
  registerController,
} from "../controller/auth.controller.js";

let router = express.Router();

// register router
router.post("/register", registerController);

// login router
router.post("/login", loginController);

export default router;
