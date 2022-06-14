import React from "react";
import GithubIcon from "../../assets/github-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import "./footer.styles.scss";

const Footer = () => {
    return (
        <>
            <div className="footer footer__content">
                <a
                    className="footer__icon"
                    href="http://www.github.com/longnphan"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={GithubIcon}
                        alt="GitHub Icon"
                        width="32px"
                        height="32px"
                    />
                </a>

                <a
                    className="footer__icon"
                    href="http://www.linkedin.com/in/longnphan"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={LinkedinIcon}
                        alt="LinkedIn Logo"
                        width="32px"
                        height="32px"
                    />
                </a>
            </div>
        </>
    );
};

export default Footer;
