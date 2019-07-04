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
				{/* Main */}
				<main>
					<section className="playlist-container wrapper">
						<h2>Playlist</h2>
						<div className="playlist">
							<header className="playlist-header grid-col-3 center-child">
								<div className="song">
									<span>Song</span>
								</div>
								<div className="genre">
									<select>
										<option value="Genere">Genere</option>
										<option value="Rock">Rock</option>
										<option value="Mello">Mello</option>
										<option value="Classical">Classical</option>
									</select>
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
			</>
		);
	}
}

export default Dashboard;
