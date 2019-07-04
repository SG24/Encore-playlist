// imports modules
import React from "react";
import { Redirect } from "react-router-dom";

// imports styles
import "./stylesheets/main.scss";

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

			<body>
				{/* <!-- Header --> */}
				<header className="header">
					<nav className="flex-between">
						<h1 className="logo">
							<a href="index.html">
								<span>Encore</span>
							</a>
						</h1>
						<div>
							<input type="checkbox" id="drop" />
							<label className="userlinks" for="drop" className="toggle flex-between">
								<span className="username">John Doe</span>
								<img className="user-icon" src="./images/avatar.jpg" alt="Your profile" />
							</label>
							<ul className="links flex-between">
								<li className="header-item profile">
									<a href="profile.html">
										<span>Profile</span>
									</a>
								</li>
								<li className="header-item add-playlist">
									<a href="profile.html">
										<span><i className="fas fa-plus-circle"></i> Create Playlist</span>
									</a>
								</li>
								<li className="header-item logout">
									<a href="#">
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
							<div className="song-container grid-col-3 center-child">
								<div className="song">
									<span>Jolene - Ray LaMontagne</span>
								</div>
								<div className="genre">
									<span>Country</span>
								</div>
								<div className="votes">
									<span>100</span>
									<span className="upvote">
										<i className="fas fa-angle-up"></i>
									</span>
								</div>
							</div>
							<div className="song-container grid-col-3 center-child">
								<div className="song">
									<span>The Scientist - Coldplay</span>
								</div>
								<div className="genre">
									<span>Pop</span>
								</div>
								<div className="votes">
									<span>90</span>
									<span className="upvote">
										<i className="fas fa-angle-up"></i>
									</span>
								</div>
							</div>
							<div className="song-container grid-col-3 center-child">
								<div className="song">
									<span>Birds - Coldplay</span>
								</div>
								<div className="genre">
									<span>Pop</span>
								</div>
								<div className="votes">
									<span>70</span>
									<span className="upvote">
										<i className="fas fa-angle-up"></i>
									</span>
								</div>
							</div>
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
								<a href="">
									<i className="fas fa-at"></i>
								</a>
							</li>
							<li className="footer-item">
								<a href="">
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li className="footer-item">
								<a href="">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
							<li className="footer-item">
								<a href="">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
						</ul>
					</nav>
					<section className="footer-bottom">
						<p><small>&copy;</small> <span>ENCORE</span> by AltCampus</p>
					</section>
				</footer>
			</body>

		);
	}
}

export default Dashboard;
