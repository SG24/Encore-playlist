import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import "./App.scss";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}

	onClickHandler = () => {
		this.setState({ redirect: true });
	};

	render() {
		let { redirect } = this.state;
		if (redirect) {
			return (
				<BrowserRouter>
					<Redirect exact to="/auth/github" />
				</BrowserRouter>
			);
		}
		return (
			<div>
				<button onClick={this.onClickHandler}>Log in using Github!</button>
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
