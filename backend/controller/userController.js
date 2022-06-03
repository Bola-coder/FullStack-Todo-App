const asyncHandler = require("express-async-handler");
const User = require("./../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Public Route
// GET /api/v1/users/register
// Create a new user
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Checking if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404);
    throw new Error(`User with email: ${email} aready exists!`);
  }

  // Hashing the password entered by the user.
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userObj = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
  };

  const user = await User.create(userObj);
  if (!user) {
    res.status(400);
    throw new Error("Failed to create new user.");
  }

  res.status(200).json({
    status: "success",
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    },
  });
});

// Public Route
// GET /api/v1/users/login
// Authenticate user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401);
    throw new Error("Please fill in your Email and Password");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      status: "success",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials. Failed to login");
  }
});

// Private Route
// GET /api/v1/users/profile
// Authenticate user
const currentUser = asyncHandler(async (req, res) => {
  const { _id, firstName, lastName, email } = await User.findById(req.user.id);
  res.status(200).json({
    status: "success",
    id: _id,
    email,
    firstName,
    lastName,
  });
});

// Creating a jwt.
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
