import React from "react";
import aboutPic from '../assets/aboutpic.jpg'

function About ({}) {
    return (
        <div className="y-wrap">
            <div className="about-h">
                <h2>Ronarro L. Cleveland, II</h2>
                <h3>Creator of American University Football Weekend</h3>
            </div>
            <div className="about-pg">
                <img src={aboutPic} className="about-pic" alt="Ronarro Cleveland, II" />
            </div>
            <div className="about-p">
                <p className="">As a fan of college football, I wanted to provide something to the community. American University Football Weekend (because I'm sure College Football Saturday was taken) is a place to find information for your favorite and other teams you wish to follow!</p>
                <br />
                <p>AUFW is my final capstone project with DigitalCrafts. It was built with React.js and Redux. I enjoyed creating components to make my imagination become reality.</p>
            </div>
        </div>
    );
};

export default About