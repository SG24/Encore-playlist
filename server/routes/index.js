// importing modules
const express = require('express');
const router = express.Router()

// importing controller
const indexController = require("./../controllers/indexController");

// handles routes
router.get('/', indexController.renderIndexPage);

// exporting router
module.exports = router;