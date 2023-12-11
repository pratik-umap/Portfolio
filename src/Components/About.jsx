import React from "react";
import { Link } from "react-router-dom";
import "../style/About.css";
import {motion} from "framer-motion";


function About() {

  const animationbar={
    initial:{opacity:0,y:10},
    whileInView:{opacity:1,y:0},
    transition:{duration:1}
  }
  return (
    <div className="about">
      <div className="about_content">
        <div className="about_image"></div>
        <div className="about_left">
          <motion.h4 initial={animationbar.initial}
           whileInView={animationbar.whileInView}
           transition={animationbar.transition}
           style={{overflow:"hidden"}}>

            Hi,👋 I'm <span> Pratik Umap</span>
          </motion.h4>
          <motion.p
             initial={animationbar.initial}
             whileInView={animationbar.whileInView}
             transition={{duration:1,delay:.6}}
          >
            I am a web developer from india. I code and create web elements for
            amazing people around the world. I like work with new people. I
            enjoy creating things that live on the internet,whether that be
            website applications,or anything in between.My goal is to always
            build product that provide pixel-perfect, performance experience.
          </motion.p>

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
