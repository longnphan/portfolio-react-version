import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";

// import GithubIcon from "../../assets/github-icon.png";
// import LinkedinIcon from "../../assets/linkedin-icon.png";
import Resume from "../../assets/LongPhanResume.pdf";

import "./navbar.styles.scss";

const Navbar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <h1 className="nav__heading">Long Phan</h1>
                <ul className={navbarOpen ? "nav__list.active" : "nav__list"}>
                    <li className="nav__link" key="navHomeLink">
                        <NavLink to="/" className="nav__a">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav__link">
                        <a href={Resume} className="nav__a">
                            Resume
                        </a>
                    </li>
                    <li className="nav__link">
                        <a
                            href="mailto:longnphan@outlook.com"
                            className="nav__a"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <button
                    onClick={() => setNavBarOpen(prev => !prev)}
                    type="button"
                    className="nav__hamburger"
                >
                    <i className="fa fa-bars" />
                </button>
            </nav>
        </>
    );
};

export default Navbar;
