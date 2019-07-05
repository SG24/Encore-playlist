// importing modules
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

// defining app component
class App extends Component {
	render() {
		return (
			<BrowserRouter>

				<div>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/me/:tab" component={Profile} />
					<Route exact path="/" component={Home} />
				</div>

			</BrowserRouter>
		);
	}
}

// exporting add component
export default App;
