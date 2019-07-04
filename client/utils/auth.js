// Function for authenticating use login on frontend //

// importing modules
import axios from "axios";

let auth = {

  // gets user data from localStorage
  getUserID: function () {
    let avatar_url = localStorage.getItem("encore-avatar");
    let email = localStorage.getItem("encore-email");
    let name = localStorage.getItem("encore-name");
    let username = localStorage.getItem("encore-username");
    let success = localStorage.getItem("encore-success") === "true";
    let error = localStorage.getItem("encore-error");

    if (success) return { success: true, user: { avatar_url, email, name, username } };
    else if (!success) return { success: false, message: "No user found!" };
  },

  // fetches and stores user info
  setUserID: function (token) {
    fetch("/users/" + token)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("encore-avatar", data.user.avatar_url);
        localStorage.setItem("encore-email", data.user.email);
        localStorage.setItem("encore-name", data.user.name);
        localStorage.setItem("encore-username", data.user.username);
        localStorage.setItem("encore-success", true);
        return data.user;
      }
      else if (!data.success) {
        alert(data.message);
        localStorage.setItem("encore-error", data.message);
        localStorage.setItem("encore-success", false);
        return data.message;
      }
    })
    .then(result => {
      return Promise.resolve(result);
    });
},

  // logs user out of the device
  logOutUser: function () {
    localStorage.clear();
},

};

export default auth;
