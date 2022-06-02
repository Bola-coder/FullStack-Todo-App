const mongoose = require("mongoose");

const userSchema = mongoose.schema({
  firstName: {
    type: String,
    required: [true, "Firstname should not be empty"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Lastname should not be empty"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A user should have an email address."],
    unique: [true, "Email address should be unique for each user"],
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
