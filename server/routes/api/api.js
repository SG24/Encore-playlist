// Routing requests to api

// imports modules
const express = require('express');
const router = express.Router();

// imports routers
let songsRouter = require("./v1/songs");
let playlistsRouter = require("./v1/playlists");

// handles routes
router.use("/v1/songs", songsRouter);
router.use("/v1/playlists", playlistsRouter);

// exports router
module.exports =router;