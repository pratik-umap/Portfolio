import React from "react";
import { Link } from "react-router-dom";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div className="about_content">
        <div className="about_image"></div>
        <div className="about_left">
          <h4>
            Hi,👋 I'm <span> Pratik Umap</span>
          </h4>
          <p>
            I am a web developer from india. I code and create web elements for
            amazing people around the world. I like work with new people. I
            enjoy creating things that live on the internet,whether that be
            website applications,or anything in between.My goal is to always
            build product that provide pixel-perfect, performance experience.
          </p>

          <div className="about_button">
            <Link to="/Personal">
              <button className="about_btn">More About Me</button>
            </Link>
            <Link to="/contact">
              <button className="about_btn contact-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
