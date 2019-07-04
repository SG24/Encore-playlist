// User model //
let mongoose = require("mongoose");

// defining user schema
let userSchema = new mongoose.Schema({

});

// requiring and exporting model
let User = mongoose.model("User", userSchema);
module.exports = User;
