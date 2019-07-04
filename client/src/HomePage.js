// importing modules
import React from "react";
// import "./style.css";
import "./stylesheets/main.scss";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {


    return (

      <main className="img_background center-child">
        <section className="text-container text-center">
          <h1 className="main-heading">Encore</h1>
          <h4 className="tag-line">Welcome to Encore.
                Vote your favourite music <br className="break" /> and create your personalized playlist.
            </h4>
          <div className="buttons flex-around">
            <a href="./login.html"><button>LogIn</button></a>
            <a href="#"><button>SignUp</button></a>
          </div>
        </section>
      </main>

    );
  }
}

// exporting components
export default Home