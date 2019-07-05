// Playlist model //

// importing modules
let mongoose = require("mongoose");

// defining playlist schema
let playlistSchema = new mongoose.Schema({
  // name of the playlist
  name: {
    type: String,
    required: true,
  },
  // owner of the playlist
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // array of genres and number of songs of each genre to include
  songs: [{
    genre: {
      type: String,
    },
    number: {
      type: Number,
    }
  }],
}, { timestamps: true });

// requiring and exporting the playlist model
let Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;