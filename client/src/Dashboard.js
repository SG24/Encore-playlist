import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './Header';
import "./stylesheets/main.scss";

import Profile from "./Profile";

class Dashboard extends React.Component {
	render() {
		return (
			<>
				{/* Header */}
				<Header />
				<h1>Dashboard</h1>
				<Link to="/profile">Profile</Link>
				<BrowserRouter>
					<Route path="/profile" component={Profile} />
				</BrowserRouter>
			</>
		);
	}
}

export default Dashboard;
