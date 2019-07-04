// User router

// imports modules
let router = require("express").Router();

// imports controller
let userController = require("./../controllers/userController");

// handles routes
router.get("/:id", userController.findUserByToken);

// exports router
module.exports = router;