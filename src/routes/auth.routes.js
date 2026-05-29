import express from "express";
import registerController from "../controller/auth.controller.js";

let router = express();

router.post("/register",registerController);

export default router;
