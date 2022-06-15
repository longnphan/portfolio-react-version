import React from "react";
import Card from "../components/Card/card.component";
import "./landing.styles.scss";

const Landing = ({ projectData }) => {
    return (
        <>
            <div className="landing">
                <Card cardHeading="Projects" />
            </div>
        </>
    );
};

export default Landing;
