// handling api requests for songs //

// imports modules
let router = require("express").Router();

// imports controller
let songsController = require("./controllers/songsController");

// handles routes
router.post("/song/new", songsController.newSong)

// exports router
module.exports = router;