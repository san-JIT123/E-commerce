import authMiddleware from "../middleware/auth.middleware.js";
import { createProductService } from "../service/product.service.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandle from "../utils/asyncHandle.js";

// product create controller

export let createProductController = asyncHandle(async (req, res) => {
  // service layer pass data
  const data = await createProductService(req);

  //  success response
  return res
    .status(201)
    .json(new ApiResponse("Product create Successfully", data));
});
