// User model //
let mongoose = require("mongoose");

// defining user schema
let userSchema = new mongoose.Schema({
  // name
  name: {
    type: String,
  },
  // login username of the user
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // github email
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // url of the profile pic 
  avatar_url: {
    type: String,
  },
}, { timestamps: true });

// requiring and exporting model
let User = mongoose.model("User", userSchema);
module.exports = User;
