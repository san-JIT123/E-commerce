import authMiddleware from "../middleware/auth.middleware.js";
import ProductModel from "../model/product.model.js";
import {
  createProductService,
  deleteProductService,
  getCategoryService,
  updateProductService,
} from "../service/product.service.js";
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

//all product controller
export let getAllProductController = asyncHandle(async (req, res) => {
  let allProducts = await ProductModel.find();

  return res
    .status(200)
    .json(new ApiResponse("Get all Product Fetch Successfully", allProducts));
});

//get id product controller
export let getProductByIdController = asyncHandle(async (req, res) => {
  let { id } = req.params;
  // if(!id)
  console.log(id);
  let getProductById = await ProductModel.findById(id);
  console.log(getProductById);
  return res
    .status(200)
    .json(new ApiResponse("Get Product By id Successfully", getProductById));
});

// update product controller
export let updateProductController = asyncHandle(async (req, res) => {
  let updateProduct = await updateProductService(req);

  return res
    .status(200)
    .json(new ApiResponse("Update Product successfully", updateProduct));
});

// delete Product Controller
export let deleteProductController = asyncHandle(async (req, res) => {
  let data = await deleteProductService(req);

  return res
    .status(200)
    .json(new ApiResponse("Delete Product successfully", data));
});

export let getCategoryController = asyncHandle(async (req, res) => {
  const categoryProduct = await getCategoryService(req);

  return res
    .status(200)
    .json(
      new ApiResponse("get category product successfully", categoryProduct),
    );
});
