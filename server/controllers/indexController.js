// Index Controller //

// imports user model 
let User = require("./../models/User");

// exporting functions
module.exports = {

  renderIndexPage: function (req, res, next) {
    res.render("index")
  },
};