// TODO make page working

// imports modules
import React from "react";
import { Redirect, Link } from "react-router-dom";

// imports resources
import "./stylesheets/main.scss";
import userImg from "./images/avatar.jpg";

// imports auth utils
import auth from "./../utils/auth";

class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			user: null,
			isLoadingSongs: true,
			message: null,
			songsData: null
		};
	}

	componentDidMount = () => {
		auth.setAxiosHeaders();
		this.updateUserInfo();
		this.fetchSongs();
		this.loadSongs();
	}

	// fetches and saves user from localStorage
	updateUserInfo = () => {
		let user = auth.getUserID();
		this.setState({ user: user });
	}

	// handles log out
	handleLogOutClick = () => {
		auth.logOutUser();
		this.props.history.push("/");
	}

	// TODO
	loadSongs = (genre, start = 0, end = 10) => {
		// Return array of songs object
		return genre;
	}
	// TODO
	fetchSongs() {
		// Where we're fetching data from
		fetch(/* Url of songs data */)
		  .then(response => response.json())
		  // ...then we update the songsData state
		  .then(data =>
			this.setState({
			  songsData: data,
			  isLoading: false,
			})
		  )
		  // Catch any errors we hit and update the app
		  .catch(message => this.setState({ message, isLoading: false }));
	  }

	render() {

		// extracts variables
		let { user } = this.state;
		let { handleLogOutClick } = this;
		let { songsData, isLoadingSongs } = this.state;

		// calculates user display info
		let username = user && user.user && user.user.username ? user.user.username : "Loading...";
		let avatar_url = user && user.user && user.user.avatar_url ? user.user.avatar_url : userImg;

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
							<label htmlFor="drop" className="userlinks" className="toggle flex-between">
								<span className="username">{username}</span>
								<img className="user-icon" src={avatar_url} alt="Your profile" />
							</label>
							<ul className="links flex-between">
								<li className="header-item profile">
									<Link to="/me/3">
										<span>Profile</span>
									</Link>
								</li>
								<li className="header-item add-playlist">
									<Link to="/me/2">
										<span><i className="fas fa-plus-circle"></i> Create Playlist</span>
									</Link>
								</li>
								<li className="header-item logout">
									<a onClick={handleLogOutClick} href="#">
										<span>Logout</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				{/* <!-- Main --> */}
				<main>
					<section className="playlist-container wrapper">
						<h2>Playlist</h2>
						<div className="playlist">
							<header className="playlist-header grid-col-3 center-child">
								<div className="song">
									<span>Song</span>
								</div>
								<div className="genre">
									{/* <!-- <span id="song-category"></span> --> */}
									<select>
										<option value="Genere">Genre</option>
										<option value="Rock">Rock</option>
										<option value="Mello">Mello</option>
										<option value="Classical">Classical</option>
									</select>
									{/* <!-- <ul id="song-category-list">
                                <li>Genere</li>
                                <li>Rock</li>
                                <li>Mello</li>
                                <li>Classical</li>
                            </ul> --> */}
								</div>
								<div className="votes">
									<span>Votes</span>
								</div>
							</header>

							{ // Updates dashboard with songs
								!isLoadingSongs ? ( songsData.length > 0 && 
								songsData.map((song, index) => (
								<div key={index} className="song-container grid-col-3 center-child">
									<div className="song">
										<span>{song.name}</span>
									</div>
									<div className="genre">
										<span>{song.genre}</span>
									</div>
									<div className="votes">
										<span>{song.votes}</span>
										<span className="upvote">
											<i className="fas fa-angle-up"></i>
										</span>
									</div>
								</div>
								))
								) : (
									<p className="loading-text">Data is loading...</p>
								)
							}
							{/* Footer */}
							<footer className="pages grid-col-4 center-child">
								<div className="pagination">
									<span className="previous">
										<i className="fas fa-angle-left"></i>
									</span>
									<span className="next">
										<i className="fas fa-angle-right"></i>
									</span>
								</div>
							</footer>
						</div>

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

export default Dashboard;
