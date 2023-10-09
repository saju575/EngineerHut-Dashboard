const createHttpError = require("http-errors");
const { JWT_ACCESS_KEY } = require("../secret");
const jwt = require("jsonwebtoken");

exports.isAuthinticated = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      throw createHttpError(401, "Access token not found. Please Login");
    }
    const decoded = jwt.verify(accessToken, JWT_ACCESS_KEY);
    if (!decoded) {
      throw createHttpError(401, "Invalid access token. Please login again.");
    }
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
