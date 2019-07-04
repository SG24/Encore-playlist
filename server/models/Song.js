// defining Song model

// importing modules
let mongoose = require("mongoose");

// defining song schema
let songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  url: {
    type: String,
    default: "https://www.youtube.com",
  }
}, { timestamps: true });

// requiring and exporting model
let Song = mongoose.model("Song", songSchema);
module.exports = Song;
