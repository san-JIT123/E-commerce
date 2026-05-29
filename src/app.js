import express from "express";
import { errorMiddleware } from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";

// express instance
const app = express();

// middleware -> JSON data read .
app.use(express.json());

// auth api
app.use("/api/auth", authRouter);

// Global Error handling
app.use(errorMiddleware);

export default app;
