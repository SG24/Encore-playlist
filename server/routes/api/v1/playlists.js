// Handles playlists routes //

// imports modules
let router = require("express").Router();

// imports controller
let playlistsController = require("./controllers/playlistsController");
let jwtAuth = require("./../../../utils/jwtAuth");

// handles routes
router.post("/new", jwtAuth.authenticateJWT, playlistsController.createNewPlaylist);

// exports router
module.exports = router;