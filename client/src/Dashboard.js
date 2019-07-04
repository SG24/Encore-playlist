import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Profile from "./Profile";

class Dashboard extends React.Component {
	render() {
		return (
			<>
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
