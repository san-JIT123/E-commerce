import { registerService } from "../service/auth.service.js";
import asyncHandle from "../utils/asyncHandle.js";

let registerController = asyncHandle(async (req, res) => {
  let result = await registerService(req.body);
  res.send("ok");
});

export default registerController;
