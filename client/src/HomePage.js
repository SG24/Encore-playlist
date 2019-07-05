// importing modules
import React from "react";
import { Redirect } from "react-router-dom";
import "./stylesheets/main.scss";

// imports auth utils 
import auth from "./../utils/auth";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount = () => {
    auth.setAxiosHeaders();
  }

  render() {

    // if token exists in local storage, redirects to dashboard 
    if (auth.getUserID().success || this.props.location.search.split("=").length === 2) {
      // TODO Need to fix the async call below because of which we need to click on login twice
      // fetching and saving user data
      auth.setUserID(this.props.location.search.split("=")[1]);
      // redirects to dashboard
      return (<Redirect to="/dashboard" />);
    }

    // returning JSx
    return (

      <main className="img_background center-child">
        <section className="text-container text-center">
          <h1 className="main-heading">Encore</h1>
          <h4 className="tag-line">Welcome to Encore.
                Vote your favourite music <br className="break" /> and create your personalized playlist.
          </h4>
          <div className="buttons flex-around">
            {/* <button onClick={handleLoginClick}>LogIn Using GitHub</button> */}
            <a href="/auth/github"><button>Login with Github</button></a>
            {/* <button>SignUp</button> */}
          </div>
        </section>
      </main>

    );
  }
}

// exporting components
export default Home