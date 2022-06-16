import React from "react";
import "./projectcard.styles.scss";

const ProjectCard = ({
    projectHeading,
    projectDescription,
    projectStack,
    projectVideoUrl,
}) => {
    return (
        <>
            <div className="projectcard">
                <h1 className="projectcard__title">{projectHeading}</h1>
                <video
                    controls
                    className="projectcard__video"
                    width="70%"
                    height="auto"
                    muted
                    preload="none"
                    title=""
                    poster=""
                >
                    <source src={projectVideoUrl} type="video/mp4" />
                </video>
                <p className="projectcard__description projectcard__description__italic">
                    {projectStack}
                </p>
                <p className="projectcard__description">{projectDescription}</p>
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
