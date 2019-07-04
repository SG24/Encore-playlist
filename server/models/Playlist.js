// Playlist model //

// importing modules
let mongoose = require("mongoose");

// defining playlist schema
let playlistSchema = new mongoose.Schema({

});

// requiring and exporting the playlist model
let Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;