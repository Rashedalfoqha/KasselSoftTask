const express = require("express");
const {
  register,
  login,
  getUserInfoById,
  updateData
} = require("../controller/users");
const usersRouter = express.Router();
const authentication = require("../middleware/authentication");
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/", authentication, getUserInfoById);
usersRouter.put("/update", authentication, updateData);

module.exports = usersRouter;
 