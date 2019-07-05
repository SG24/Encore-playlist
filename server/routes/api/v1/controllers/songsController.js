// Songs Controller //

// imports models
let Song = require("./../../../../models/Song");
let User = require("./../../../../models/User");

// declares constants and global variables
const _gGENRE_ARR = ["EDM", "ROCK", "POP", "ROCK", "RAP"];

// parses song genre
// receives: genre to be parsed
// if the genre exists in pre-defined list, sends it back in uppercase, else returns "OTHER"
let fixGenre = function (genre) {
  let genreToBeChecked = genre.toUpperCase();
  if (_gGENRE_ARR.includes(genreToBeChecked)) {
    return genreToBeChecked;
  }
  else return "OTHERS";
};

// exports functions
module.exports = {
  // adds new song document
  newSong: function (req, res, next) {
    let { name, genre, url } = req.body;

    // requiring logged in user
    let user;
    if (req.auth.success) user = req.auth.user;
    else if (!req.auth.success) return res.json({ success: false, message: "Unable to find a user while authenticating the token." });

    let songData = {
      name: name.toLowerCase(),
      genre: fixGenre(genre),
      url: url ? url : "www.youtube.com",
      addedBy: user._id,
    }

    // checking if song already exists
    Song.findOne({ name: songData.name }, (err, song) => {
      if (err) return res.json({ success: false, message: "Encountered unexpected error while trying to find the requested song." });
      if (song) return res.json({ success: false, song, message: "The requested song already exists in the database." });
      else if (!song) {
        // creating a new song if it doesn't exist
        Song.create(songData, (err, songCreated) => {
          if (err) return res.json({ success: false, message: "Encountered unexpected error while trying to create the requested song." });
          if (songCreated) {
            // if song created successfully, adding it to the user's document in the list of added song.
            User.findByIdAndUpdate(user._id, { $push: { songs: songCreated._id } }, { new: true }, (err, userSearched) => {
              if (err) return res.json({ success: false, error: err, message: "Encountered unexpected error while trying to update user profile. Try again later." });

              if (userSearched) {
                return res.json({ success: true, song: songCreated });
              }
            });
          }
        });
      }
    })

  }
};
