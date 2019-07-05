// TODO: make tabs working

// imports modules
import React from "react";
import { Redirect, Link } from "react-router-dom";

// imports resources
import auth from "./../utils/auth";
import "./stylesheets/main.scss";
import userImg from "./images/avatar.jpg";

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			user: null,
			activeTab: 0,
		};
	}

	componentDidMount = () => {
		let activeTab = Number(this.props.match.params.tab);
		this.setState({activeTab});
		this.updateUserInfo();
	}

	// fetches and saves user from localStorage
	updateUserInfo = () => {
		let user = auth.getUserID();
		this.setState({ user: user });
	}
	
	// updates active tab display
	// returns an array of classes for the three divs in the given order depending upon the active tab
	updateActiveTabDisplay = () => {
		let activeTab = this.state.activeTab;
		const tabs = ["song-form", "playlist-form", "my-playlists"];
		return tabs.map((block, ind) => {
			return ind === Number(activeTab) - 1 ? `${block} text-center display-block` : `${block} text-center display-none`;
		});
	}

	// handles log out
	handleLogOutClick = () => {
		auth.logOutUser();
		this.props.history.push("/");
	}
	
	// handle active tab change
	handleActiveTabChange = (event) => {
		let activeTab = event.target.dataset.tab ? Number(event.target.dataset.tab) : Number(event.target.parentElement.dataset.tab);
		this.setState({activeTab: activeTab});
	}

	render() {

		// extracts variables
		let { user } = this.state;
		let { handleLogOutClick, updateActiveTabDisplay, handleActiveTabChange } = this;

		// calculates user display info
		let username = user && user.user && user.user.username ? user.user.username : "Loading...";
		let avatar_url = user && user.user && user.user.avatar_url ? user.user.avatar_url : userImg;

		// calculates classes for the active and dormant tabs
		let tabClasses = updateActiveTabDisplay();

		// redirecting to home user not found
		if (user && !user.success) {
			// TODO fix async call below
			auth.logOutUser();
			return (<Redirect to="/" />);
		}

		// returns JSx
		return (
			<div>
				{/* <!-- Header --> */}
				<header className="header">
					<nav className="flex-between">
						<h1 className="logo">
							<Link to="/dashboard">
								<span>Encore</span>
							</Link>
						</h1>
						<div>
							<input type="checkbox" id="drop" />
							<label className="userlinks" htmlFor="drop" className="toggle flex-between">
								<span className="username">{username}</span>
								<img className="user-icon" src={avatar_url} alt="Your profile" />
							</label>
							<ul className="links flex-between">
								<li className="header-item profile">
									<a onClick={handleActiveTabChange} data-tab="3">
										<span>Profile</span>
									</a>
								</li>
								<li className="header-item add-playlist">
									<a onClick={handleActiveTabChange} data-tab="2">
										<i className="fas fa-plus-circle"></i> <span> Create Playlist</span>
									</a>
								</li>
								<li className="header-item logout">
									<a onClick={handleLogOutClick}>
										<span>Logout</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				{/* <!-- Main --> */}
				<main className="grid-col-one grid-col-two">
					<aside>
						<div className="profile-pic text-center">
							<img src={avatar_url} alt="User profile picture" />
							<p className="user-name">{username}</p>
						</div>
						<section className="buttons profile-btns grid-col-1">
							<button data-tab="1" onClick={handleActiveTabChange} id="add-song-btn">Add Song</button>
							<button data-tab="2" onClick={handleActiveTabChange} id="create-playlist-btn">Create Playlist</button>
							<button data-tab="3" onClick={handleActiveTabChange} id="playlist-btn">My Playlists</button>
						</section>
					</aside>

					<section className="main-section">

						<article className={tabClasses[0]} id="song-form">
							<h2>Add Song</h2>
							<br />
							<form action="" className="form-control text-center">
								<input type="text" placeholder="Song Name" />
								<input type="text" placeholder="Genre" />
								<input type="url" placeholder="Enter song URL" />
								<input type="submit" value="Submit" />
							</form>
						</article>

						<article className={tabClasses[1]} id="playlist-form">
							<h2>Create Playlist</h2>
							<form action="" className="form-control text-center">
								<input id="search-song" type="text" placeholder="Search your Song" />
							</form>
							<div className="hidden">
								<span className="add-song">
									<i className="fas fa-plus-circle"></i>
									<span>Add Your Own Song</span>
								</span>
							</div>
						</article>

						<article className={tabClasses[2]} id="my-playlists">
							<br />
							<h2>My PlayLists</h2>
							<ul className="my-playlist-item">
								<li>Playlist 1</li>
								<li>Playlist 2</li>
								<li>Playlist 3</li>
								<li>Playlist 4</li>
							</ul>
						</article>

					</section>
				</main>
				{/* <!-- Footer --> */}
				<footer className="footer">
					<nav className="footer-nav">
						<ul className="footer-links flex-center">
							<li className="footer-item">
								<a>
									<i className="fas fa-at"></i>
								</a>
							</li>
							<li className="footer-item">
								<a>
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li className="footer-item">
								<a>
									<i className="fab fa-instagram"></i>
								</a>
							</li>
							<li className="footer-item">
								<a>
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
						</ul>
					</nav>
					<section className="footer-bottom">
						<p><small>&copy;</small> <span>ENCORE</span> by AltCampus</p>
					</section>
				</footer>
			</div>
		);
	}
}

export default Profile;
