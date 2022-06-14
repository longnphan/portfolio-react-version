import React from "react";
import ProjectCard from "../ProjectCard/projectcard.component";

const Card = ({ cardHeading }) => {
    return (
        <div className="card__container">
            <div card__heading>
                <h1>{cardHeading}</h1>
            </div>
            <div>
                <ProjectCard />
            </div>
        </div>
    );
};
export default Card;
