import React from "react";
import "../style/Project.css";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Project({ name, image, lang, websrc }) {

  return (
    <div className="project">
      <div className="project_section">
        <div className="project_1">
          <motion.div 
           initial={{opacity:0,y:50}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1}}
           viewport={{ once: true }}
          className="project_card">
            <div className="project_title">
              <h3>{name}</h3>
            </div>
            <div className="project_img">
              <img className="img" src={image} alt={name} />
            </div>
            <div className="project_lang">
              <p>{lang}</p>
            </div>
            <div className="project_btn">
              <a href={websrc.github} target="_blank">
                  <GitHubIcon />
              </a>
              <a href={websrc.link} target="_blank">
                 <OpenInNewIcon />
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Project;
