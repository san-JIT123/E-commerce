import express from "express";
import { errorMiddleware } from "./middleware/error.middleware.js";

// express instance
const app = express();

// middleware -> JSON data read .
app.use(express.json());

// Global Error handling
app.use(errorMiddleware);
export default app;
