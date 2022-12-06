import React from "react";
import aboutPic from '../assets/aboutpic.jpg'

function About ({}) {
    return (
        <div className="y-wrap">
            <div>
                <h2>Meet the Creator</h2>
                <img src={aboutPic} className="about-pic" alt="Ronarro CLeveland, II" />
                <h3>Ronarro L. Cleveland, II</h3>
            </div>
        </div>
    );
};

export default About