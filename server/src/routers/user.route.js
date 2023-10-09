const express = require("express");
const {
  procesRegister,
  activateUserAccount,
  handleLogin,
  handleLogout,
  userProfile,
} = require("../controllers/customer/customer.controller");
const { isAuthinticated } = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.post("/users/process-register", procesRegister);

userRouter.post("/users/activate-user", activateUserAccount);

userRouter.post("/users/login", handleLogin);

userRouter.get("/users/logout", isAuthinticated, handleLogout);

userRouter.get("/users/user-profile", isAuthinticated, userProfile);

module.exports = userRouter;
