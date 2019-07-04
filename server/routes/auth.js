// Routing auth requests //

// importing modules
let express = require("express");
let router = express.Router();
let passport = require("passport");

router.get('/github',
  passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// exporting router
module.exports = router;
