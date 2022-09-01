const mongoose = require("mongoose"); //import mongoose

// users schema
const UserSchema = new mongoose.Schema({
  email: String,
  role: String
});

const User = mongoose.model("User", UserSchema); //convert to model named User
module.exports = User; //export for controller use
