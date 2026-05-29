import { createProductService } from "../service/product.service.js";
import asyncHandle from "../utils/asyncHandle.js";

export let createProductController = asyncHandle(async (req, res) => {
  let data = await createProductService(req.bdy);
});
