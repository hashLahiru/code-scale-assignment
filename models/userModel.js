const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Enter your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Enter your email'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Enter your password'],
      minlength: 8,
    },
    bio: {
      type: String,
      maxlength: 200,
    },
    location: {
      type: String,
      maxlength: 100,
    },
  });

  const userModel = mongoose.model("users", userSchema);
  module.exports = userModel;