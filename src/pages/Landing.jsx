import React from "react";
import AboutMe from "../components/AboutMe/aboutme.compomnent";
import Card from "../components/Card/card.component";
import "./landing.styles.scss";

const Landing = ({ projectData }) => {
    return (
        <>
            <div className="landing">
                <AboutMe />
                <Card cardHeading="Projects" />
            </div>
        </>
    );
};

export default Landing;
