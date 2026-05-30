import { loginService, registerService } from "../service/auth.service.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandle from "../utils/asyncHandle.js";

//   Register User Controller
export const registerController = asyncHandle(async (req, res) => {
  const { newUser, token } = await registerService(req.body);

  //   set jwt cookie
  res.cookie(
    "token",
    token,

    //     httpOnly: true, // prevent JS access (security)
    //     secure: true, // only HTTPS (production)
    //     sameSite: "strict", // CSRF protection
    //
  );

  //   Send Response to Frontend
  return res
    .status(201)
    .json(new ApiResponse("User registered successfully", newUser));
});

//   Login User Controller
export const loginController = asyncHandle(async (req, res) => {
  const { isExisting, token } = await loginService(req.body);

 
  //   set jwt cookie
  res.cookie(
    "token",
    token,

    //     httpOnly: true, // prevent JS access (security)
    //     secure: true, // only HTTPS (production)
    //     sameSite: "strict", // CSRF protection
    //
  );

  //   Send Response to Frontend
  return res
    .status(200)
    .json(new ApiResponse("User Login successfully", isExisting));
});
