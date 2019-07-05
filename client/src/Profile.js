// TODO: make tabs working
// TODO: fix create playlist form

// imports modules
import React from "react";
import { Redirect, Link } from "react-router-dom";
import uuidv4 from "uuid/v4";

// imports resources
import auth from "./../utils/auth";
import functions from "./../utils/functions";
import "./stylesheets/main.scss";
import userImg from "./images/avatar.jpg";

// declares global consants and variables
const _gGENRE_ARR = ["EDM", "ROCK", "POP", "ROCK", "RAP", "OTHERS"];

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			// user data and active tab state
			user: null,
			activeTab: 0,
			// song form input field values
			genre: "",
			name: "",
			url: "",
			// playlist input fields data
			playlist: _gGENRE_ARR.map(genre => {
				return { genre, number: 0 };
			}),
			playlistName: "",
		};
	}

	componentDidMount = () => {
		auth.setAxiosHeaders();
		let activeTab = Number(this.props.match.params.tab);
		// let playlist = _gGENRE_ARR.map(genre => {
		// 	return {genre, number: 0};
		// });
		this.setState({
			activeTab: activeTab,
			//  playlist: playlist,
		});
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
		this.setState({ activeTab: activeTab });
	}

	// handles input value change
	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	// handles song submit click
	handleSongSubmitClick = () => {
		// extracts variables
		let { name, genre, url } = this.state;

		if (name.length === 0 || genre.length === 0) {
			alert("Please give the required arguments");
		}
		else {
			functions.addNewSong({ name, genre, url });
		}

		// resets state
		this.setState({
			name: "",
			genre: "",
			url: "",
		});
	}

	// handles playlist input change
	handlePlaylistInputChange = (event) => {

		if(event.target.name === "playlistName") {
			let name = event.target.value;
			this.setState({playlistName: name});
			return 0;
		}

		let targetIndex = event.target.dataset.index;
		let playlist = this.state.playlist;
		playlist[targetIndex].number++;
		this.setState({ playlist });
	}

	// handles playlist create click
	handlePlaylistCreateClick = () => {
		let newPlaylist = this.state.playlist;
		let newPlaylistName = this.state.playlistName;
		functions.createNewPlaylist(newPlaylist, newPlaylistName);
		// resets playlist in state
		let playlist = _gGENRE_ARR.map(genre => {
			return { genre, number: 0 };
		});
		this.setState({ playlist, playlistName: "" });
	}

	render() {

		// extracts variables
		let { user, name, genre, url, playlist, playlistName } = this.state;
		let { handleLogOutClick, updateActiveTabDisplay, handleActiveTabChange, handleInputChange, handleSongSubmitClick, handlePlaylistInputChange, handlePlaylistCreateClick } = this;

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
							<div className="form-control text-center">
								<input value={name} onChange={handleInputChange} name="name" type="text" placeholder="Song Name" />
								<input value={genre} onChange={handleInputChange} name="genre" type="text" placeholder="Genre" />
								<input value={url} onChange={handleInputChange} name="url" type="url" placeholder="Enter song URL" />
								<input onClick={handleSongSubmitClick} type="submit" value="Submit" />
							</div>
						</article>

						<article className={tabClasses[1]} id="playlist-form">
							<h2>Create Your Dynamic Playlist</h2>
							<div className="hidden">
								<span className="add-song">
									<span>Add Number of songs to include in each genre</span>
								</span>
							</div>
							<div className="form-control text-center">

								<input value={playlistName} name="playlistName" onChange={handlePlaylistInputChange} type="text" placeholder="Name of your playlist" />

								{
									_gGENRE_ARR.map((genre, ind) => {
										return (
											<div key={uuidv4()}>
												<label>
													{genre}
													<input value={playlist[ind].number} onChange={handlePlaylistInputChange} data-index={ind} id={genre} type="number" placeholder="0" />
												</label>
											</div>
										);
									})
								}

								<button onClick={handlePlaylistCreateClick}>Create</button>

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
