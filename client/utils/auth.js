// Function for authenticating use login on frontend //

let auth = {

  // gets user data from localStorage
  getUserID: function () {
    let user = localStorage.getItem("encore-playlist");
    if (user) return { success: true, user };
    else if (!user) return { success: false, message: "No user found!" };
  },

};

export default auth;
