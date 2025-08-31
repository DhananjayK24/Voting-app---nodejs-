const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  aadharCardNumber: {
    type: Number,
    required: true,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["voter", "admin"],
    default: "voter",
  },
  isVoted: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.comparePassword = asyncHandler(async (password) => {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
});

const User = mongoose.model('User', userSchema);
module.exports = User;