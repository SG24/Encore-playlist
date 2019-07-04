// imports modules
import React from "react";
import { Redirect } from "react-router-dom";

// imports auth utils
import auth from "./../utils/auth";

class Dashboard extends React.Component {

	componentDidMount = () => {

	}

	render() {

		if (!auth.getUserID().success) {
			// TODO fix async call below
			auth.logOutUser();
			return (<Redirect to="/" />);
		}

		return (
			<>
				<h1>Dashboard</h1>
			</>
		);
	}
}

export default Dashboard;
