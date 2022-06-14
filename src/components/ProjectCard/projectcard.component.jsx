import React from "react";
import "./projectcard.styles.scss";

const ProjectCard = ({ projectHeading, projectDescription, projectStack }) => {
    return (
        <>
            <div className="projectcard">
                <h1 className="projectcard__title">Project Name</h1>
                <video
                    controls
                    className="projectcard__video"
                    width="500px"
                    height="auto"
                    muted
                    preload="none"
                    title=""
                    poster=""
                >
                    <source src="" type="video/mp4" />
                </video>
                <h3 className="projectcard__description__italic">
                    Built using React.js
                </h3>
                <h3 className="projectcard__description">
                    Example text for description of the project.
                </h3>
                <div>
                    <button className="projectcard__btn">View App</button>
                    <button className="projectcard__btn projectcard__btn__right">
                        Source Code
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
