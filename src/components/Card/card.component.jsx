import React from "react";
import ProjectCard from "../ProjectCard/projectcard.component";
import projectData from "../../assets/projects-data";
import "./card.styles.scss";

const Card = ({ cardHeading }) => {
    return (
        <>
            <div className="card">
                <div className="card__heading">
                    <h1>{cardHeading}</h1>
                </div>
                <div className="card__container">
                    {projectData.map(
                        ({ description, id, stack, title, video }) => (
                            <ProjectCard
                                key={id}
                                projectHeading={title}
                                projectDescription={description}
                                projectStack={stack}
                                projectVideoUrl={video}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
};
export default Card;
