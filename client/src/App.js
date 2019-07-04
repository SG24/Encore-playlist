import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import "./App.scss";

class Login extends React.Component {
	render() {
		return (
			<div>
				<button>
					<a href="/auth/github">Log in using Github!</a>
				</button>
			</div>
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
