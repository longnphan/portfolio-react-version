import React from "react";

const ProjectCard = ({ projectHeading, projectDescription, projectStack }) => {
    return (
        <>
            <div className="project__container">
                <h1>{projectHeading}</h1>
                <video
                    controls
                    className="project__video"
                    width="500px"
                    height="auto"
                    muted
                    preload="none"
                    title=""
                    poster=""
                >
                    <source src="" type="video/mp4" />
                </video>
                <h3>{projectStack}</h3>
                <h3>{projectDescription}</h3>
            </div>
        </>
    );
};

export default ProjectCard;
