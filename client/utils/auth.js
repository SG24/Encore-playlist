// Function for authenticating use login on frontend //

// importing modules
import axios from "axios";

let auth = {

  // gets user data from localStorage
  getUserID: function () {
    let user = localStorage.getItem("encore-playlist");
    if (user) return { success: true, user };
    else if (!user) return { success: false, message: "No user found!" };
  },

  setUserID: function () {
    axios.get("/auth/github", {
      // mode: "no-cors",
      // headers: {"Access-Control-Allow-Origin": "*"}
    })
      .then(data => {
        console.log("1. ", data);
        if (data.success) {
          localStorage.setItem("encore-playlist", {sucess: true, data});
        }
        else if (!data.success) {
          alert(data.message);
          localStorage.setItem("encore-playlist", {success: false, data});
        }
      })
  }

};

export default auth;
