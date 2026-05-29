import jwt from "jsonwebtoken";

export const generateJwtSecretKey = (userId, email) => {
  return jwt.sign(
    {
      id: userId,
      email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "5m",
    },
  );
};
