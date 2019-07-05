// Functions //

// imports modules
import axios from "axios";

// declares functions
let functions = {

  // adds new song
  // receives: the new song's object
  addNewSong: function(song){
    axios.post("/api/v1/songs/new", {
      data: song,
    })
      .then(response => {
        response.data.success ? alert("Song added successfully!") : alert(response.data.message);
      })
      .catch(err => alert("Encountered unexpected error while trying to save the song, try again."));
  },

  // creates a new playlist
  // receives a playlist array, with each element being an object containing the genre and the number of songs of each genre
  // receives name of the playlist
  createNewPlaylist: function(playlist, name){
    axios.post("/api/v1/playlists/new", {
      data: {playlist, playlistName: name},
    })
    .then(response => {
      if(response.success) {
        alert("Playlist added successfully!");
      }
      else if(!response.success) {
        alert(response.message);
      }
    })
    .catch(err => alert("Encountered an unexpected error while trying to add a new playlist!"));
  },

};

// exports functions
export default functions;