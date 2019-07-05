// Authentication middleware //

// requiring user model
let User = require("./../models/User");

// exporting authentication middleware
module.exports.authenticateJWT = function (req, res, next) {
  let token = req.header("x-auth");

  User.findByToken(token)
    .then(user => {
      if (user) req.auth = { success: true, user };
      else if (!user) return res.status(404).json({ success: false, message: "Unable to find a user with a matching ID." });
      next();
    })
    .catch(error => {
      res.json({ success: false, message: "Unexpected error occurred while trying to authenticate the token.", error });
    });
};