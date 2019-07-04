// importing strategy
var GitHubStrategy = require('passport-github').Strategy;
let passport = require("passport");

// importing config file
let config = require("./../config/config");
let port = config.port;

// adding passport middleware
passport.use(new GitHubStrategy({
    clientID: config.GITHUB_CLIENT_ID,
    clientSecret: config.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:${port}/auth/github/callback`,
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      console.log(profile);
      return cb(err, user);
    });
  }
));