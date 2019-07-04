import React, { Component} from "react";
import "./stylesheets/main.scss";


class Footer extends Component {
    render() {
        return  (
                <footer className="footer">
                    <nav className="footer-nav">
                        <ul className="footer-links flex-center">
                            <li className="footer-item">
                                <a href="">
                                    <i clasNames="fas fa-at"></i>
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
                )
            }
}
export default Footer;