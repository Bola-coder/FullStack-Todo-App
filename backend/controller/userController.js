const asyncHandler = require("express-async-handler");

// Public Route
// GET /api/v1/users/register
// Create a nw user
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: "success", message: "User registerd" });
});

// Public Route
// GET /api/v1/users/login
// Authenticate user
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: "success", message: "User logged in" });
});

module.exports = {
  registerUser,
  loginUser,
};
