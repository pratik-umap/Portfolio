import React from "react";
import "../style/Skill.css";
import {motion} from "framer-motion"

function Skill() {
  const arr = [
    {
      language: "HTML5",
      width: "90%",
    },
    {
      language: "CSS3",
      width: "85%",
    },
    {
      language: "Java Script",
      width: "65%",
    },
    {
      language: "React Js",
      width: "55%",
    },
    {
      language: "Java",
      width: "70%",
    },
    {
      language: "C++/Python",
      width: "45%",
    },
    {
      language: "Bootstrap",
      width: "90%",
    },
    {
      language: "Node Js/Express Js/Mongo DB",
      width: "70%",
    },
  ];
  const animationbar={
    Leftinitial:{x:-40,y:-30},
    Rightinitial:{x:40,y:-30},
    whileInView:{x:0,y:0},
    transition:{duration:1,delay:.3}
  }
  return (
    <div className="skill">
      <div className="skill_content">
        <p>
          This is my skill section. Below is a quick overview of my main
          technical skill sets.
        </p>
      </div>

      <div className="progress_bar">
        <motion.div 
         initial={animationbar.Leftinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
        className="progress_inner">
          <span className="label">HTML5</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[0]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Rightinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
        className="progress_inner">
          <span className="label">CSS3</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[1]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Leftinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
        className="progress_inner">
          <span className="label">Java Script</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[2]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Rightinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
        className="progress_inner">
          <span className="label">React JS</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[3]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Leftinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
        className="progress_inner">
          <span className="label">JAVA</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[4]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Rightinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
        className="progress_inner">
          <span className="label">C++ / Python</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[5]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Leftinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
         viewport={{ once: true }}
        className="progress_inner">
          <span className="label">Bootstrap</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[6]}></div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={animationbar.Rightinitial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
         viewport={{ once: true }}
        className="progress_inner">
          <span className="label">Node JS</span>
          <div className="background">
            <div className="bar">
              <div className="bar_inner" style={arr[7]}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;
