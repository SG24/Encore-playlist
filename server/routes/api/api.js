// Routing requests to api

// imports modules
const express = require('express');
const router = express.Router();

// imports routers
let songsRouter = require("./v1/songs");

// handles routes
router.use("/v1/songs", songsRouter);

// exports router
module.exports =router;