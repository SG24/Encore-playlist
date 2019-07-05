// handling api requests for songs //

// imports modules
let router = require("express").Router();

// imports controller
let songsController = require("./controllers/songsController");
let jwtAuth = require("./../../../utils/jwtAuth");

// handles routes
router.post("/new", jwtAuth.authenticateJWT, songsController.newSong);
router.get("/list", jwtAuth.authenticateJWT, songsController.returnSongList);

// exports router
module.exports = router;