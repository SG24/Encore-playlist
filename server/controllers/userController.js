// User controller 

// imports modules
let User = require("./../models/User");

// exports functions
module.exports = {
  findUserByToken: function(req, res, next){
    User.findByToken(req.params.id)
      .then(data => {
        return res.json({success: true, user: data});
      })
      .catch(error => {
        return res.json({success: false, error, message: "Invalid Token."});
      });
  },
};