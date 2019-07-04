// Defining Vote model //

// importing modules
let mongoose = require("mongoose");

// defining vote schema
let voteSchema = new mongoose.Schema({

});

// requiring and exporting vote model
let Vote = mongoose.model("Vote", voteSchema);
module.exports = Vote;