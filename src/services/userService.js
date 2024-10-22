const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = { registerUser, loginUser };
