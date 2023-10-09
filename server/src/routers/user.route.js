const express = require("express");
const {
  procesRegister,
  activateUserAccount,
  handleLogin,
  handleLogout,
} = require("../controllers/customer/customer.controller");
const userRouter = express.Router();

userRouter.post("/users/process-register", procesRegister);

userRouter.post("/users/activate-user", activateUserAccount);

userRouter.post("/users/login", handleLogin);

userRouter.get("/users/logout", handleLogout);

module.exports = userRouter;
