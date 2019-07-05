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
  }

};

// exports functions
export default functions;