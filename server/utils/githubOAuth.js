// importing strategy
var GitHubStrategy = require('passport-github').Strategy;
let passport = require("passport");

// importing config file
let config = require("./../config/config");
let port = config.port;

// importing models
let User = require("./../models/User");

// adding passport middleware
passport.use(new GitHubStrategy({
  clientID: config.GITHUB_CLIENT_ID,
  clientSecret: config.GITHUB_CLIENT_SECRET,
  callbackURL: `http://localhost:${port}/auth/github/callback`,
},
  function (accessToken, refreshToken, profile, cb) {
    let userProfile = profile._json;
    User.findOne({ email: userProfile.email }, (err, user) => {
      if (user) return cb(null, user);
      else if (!user) {

        let newUser = { name: userProfile.name, email: userProfile.email, avatar_url: userProfile.avatar_url, username: userProfile.login };
        User.create(newUser, (err, userCreated) => {
          if(err) return cb(err, null);
          if(user) return cb(null, userCreated);
        });
      }
    });
  }
));