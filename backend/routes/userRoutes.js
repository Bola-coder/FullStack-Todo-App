const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("./../controller/userController");
const validateUser = require("./../middlewares/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/profile").get(validateUser, currentUser);

module.exports = router;
