// handling api requests for songs //

// imports modules
let router = require("express").Router();

// imports controller
let songsController = require("./controllers/songsController");
let jwtAuth = require("./../../../utils/jwtAuth");

// handles routes
router.post("/new", jwtAuth.authenticateJWT, songsController.newSong)

// exports router
module.exports = router;