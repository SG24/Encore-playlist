// Controller for playlists //

// imports models
let User = require("./../../../../models/User");
let Playlist = require("./../../../../models/Playlist");

// exports functions
module.exports = {

  // TODO: Playlist not storing creator id, creator's playlist array not being updated
  // creates a new playlist
  createNewPlaylist: function (req, res, next) {
    let user = req.auth.user;
    console.log("Inside create new playlist: ", user);
    let playlistInfo = req.body.data;
    let playlistObj = {
      name: playlistInfo.playlistName,
      creator: user._id,
      songs: playlistInfo.playlist.map(d => {
        return {genre: d.genre.toUpperCase(), number: d.number}
      }),
    };

    // creates a new playlist document
    Playlist.create(playlistObj, (err, newPlaylist) => {
      if(err) return res.json({success: false, error: err, message: "Unable to create a new playlist, try again!"});
      if(newPlaylist) {

        // finds and updates the playlist array for user
        User.findByIdAndUpdate(user._id, {$push: {playlists: newPlaylist._id}}, {new: true}, (err, updatedUser) => {
          if(err) return res.json({error: err, success: false, message: "Encountered an error while trying to update user profile."});
          if(updatedUser) {
            return res.json({success: true, user: updatedUser, playlist: newPlaylist});
          }
        })
      }
    });
  },

};