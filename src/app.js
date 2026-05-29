import express from "express";
import { errorMiddleware } from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

// express instance
const app = express();

// middleware -> JSON data read .
app.use(express.json());
app.use(cookieParser());

// auth api
app.use("/api/auth", authRouter);

// Global Error handling
app.use(errorMiddleware);

export default app;
