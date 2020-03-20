import React, { Component } from 'react';
import "./stylesheets/main.scss";

class Header extends Component {
    render() {
        return (
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
                        <img className="user-icon" src="assets/images/avatar.jpg" alt="Your profile" />
                    </label>
                    <ul className="links flex-between">
                        <li className="header-item profile">
                            <a href="">
                                <span>Profile</span>
                            </a>
                        </li>
                        <li className="header-item add-playlist">
                            <a href="">
                                <span><i className="fas fa-plus-circle"></i> Create Playlist</span>
                            </a>
                        </li>
                        <li className="header-item logout">
                            <a href="">
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}

export default Header;