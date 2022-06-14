import React from "react";
import ProjectCard from "../ProjectCard/projectcard.component";
import "./card.styles.scss";

const Card = ({ cardHeading }) => {
    return (
        <div className="card">
            <div className="card__heading">
                <h1>Card Heading</h1>
            </div>
            <div>
                <ProjectCard />
            </div>
        </div>
    );
};
export default Card;
