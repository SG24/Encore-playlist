// Routing auth requests //

// importing modules
let express = require("express");
let router = express.Router();
let passport = require("passport");

router.get('/github',
  passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/loginerror' }),
  function (req, res) {
    // if success, returning a token
    let user = req.user;
    let token = user.generateAuthToken();
    // res.json({user, token, success: true});
    res.redirect('/?t=' + token)
  });

// exporting router
module.exports = router;
