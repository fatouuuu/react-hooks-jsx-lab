import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about">
        <h2>About Me</h2>
        <p> I am a web developer with a passion for creating elegant, functional websites and web applications. I enjoy working with modern technologies like React, and Vue.js. I'm driven by a desire to create great user experiences and improve my skills every day. I am always keen to take on challenging projects and look forward to working with a team of highly motivated people. </p>
        <img src={image} alt="I made this" />
    </div>
);
}

export default About;
