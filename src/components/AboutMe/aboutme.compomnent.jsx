import React from "react";
import "./aboutme.styles.scss";

const AboutMe = ({ aboutMeHeading }) => {
    return (
        <>
            <div className="card">
                <div className="card__heading">
                    <h1>About Me</h1>
                </div>
                <div className="card__container">
                    <p className="card__paragraph">
                        From the moment I wrote my first line of code, I was
                        hooked. I once read that applications are just a bunch
                        of small components put together and I like to challenge
                        myself by building small components in order to apply
                        the knowledge that I’m learning. Below you’ll find
                        completed projects that showcase my skills and
                        background in developing.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
