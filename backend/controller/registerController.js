const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../modal/userModal");

//@desc registerUser
//route SET/api/users
//@access private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }

  //if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User");
  }
});

//@desc Authenticate
//route SET/api/user/logins
//@access private
const LoginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//@desc get User Data
//route GET/api/users/me
//@access private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data of mine" });
});
module.exports = { registerUser, LoginUser, getMe };
