import React from "react";
import Header from './Header';
import Footer from './Footer';

class Profile extends React.Component {
	render() {
		return (
		// Header
		<>
		<Header />
		<h1>Profile page</h1>
		{/* Footer */}
		<Footer />
		</>
		)
	}
}

export default Profile;
