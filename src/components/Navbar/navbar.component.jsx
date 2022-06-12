import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import GithubIcon from "../../assets/github-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import Resume from "../../assets/LongPhanResume.pdf";

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Long Phan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="http://www.github.com/longnphan"
                                target="_blank"
                            >
                                <img
                                    src={GithubIcon}
                                    alt="GitHub Icon"
                                    width="32px"
                                    height="32px"
                                />
                            </Nav.Link>
                            <Nav.Link
                                href="http://www.linkedin.com/in/longnphan"
                                target="_blank"
                            >
                                <img
                                    src={LinkedinIcon}
                                    alt="Linkedin Icon"
                                    width="32px"
                                    height="32px"
                                />
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href={Resume} target="_blank">
                                Resume
                            </Nav.Link>
                            <Nav.Link
                                eventKey={2}
                                href="mailto:longnphan@outlook.com"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
