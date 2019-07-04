// importing modules
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./HomePage";

// defining app component
class App extends Component {
	render() {
		return (
			<Home />
		);
	}
}

// exporting add component
export default App;
