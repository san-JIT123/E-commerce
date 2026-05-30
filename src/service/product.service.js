import ProductModel from "../model/product.model.js";
import ApiError from "../utils/apiError.js";

//  product create
export let createProductService = async (req) => {
  //  multer (files)
  const images = req.files;

  const { name, price, description, category } = req.body;

  //   validation check

  // name and price check
  if (!name || !price) {
    throw new ApiError("All Field and price required", 400);
  }

  if (name.trim().length < 3) {
    throw new ApiError("");
  }
  if (description.trim().length < 10) {
    throw new ApiError("Description must be at least 10 characters", 400);
  }
  if (Number(price) <= 0) {
    throw new ApiError("Price must be greater than 0", 400);
  }

  if (category.trim().length < 2) {
    throw new ApiError("Category must be at least 2 characters", 400);
  }

  //  image validation
  if (!images || images.length === 0) {
    throw new ApiError("Images required", 400);
  }

  //  images process
  const imageUrls = images.map((files) => files.originalname);

  //  new product create mongoDB
  const newProduct = await ProductModel.create({
    productName: name,
    description,
    price,
    category,

    // array
    image: imageUrls,
    user: req.user.email,
  });

  return newProduct;
};
