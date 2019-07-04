import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.scss";

class Login extends React.Component {
	// onClickHandler = () => {
	//   fetch("https://github.com/login/oauth/authorize")
	// 		.then(response => {
	// 			if (response.status === 200) {
	// 				console.log("Connected to github");
	// 				this.props.history.push("/auth/github");
	// 			}
	// 		})
	// 		.catch(error => console.log(error));
	// };

	render() {
		return (
			// <button onClick={this.onClickHandler}>Login Using Github!</button>
			<BrowserRouter>
				<button>
					<Link to="/auth/github">Login using GitHub!</Link>
				</button>
			</BrowserRouter>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Encore</h1>
				<Login />
			</div>
		);
	}
}

export default App;
