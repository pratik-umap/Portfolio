import React from "react";
import "../style/Project.css";

function Project({ name, image, lang, websrc }) {
  return (
    <div className="project">
      <div className="project_section">
        <div className="project_1">
          <div className="project_card">
            <div className="project_title">
              <h3>{name}</h3>
            </div>
            <div className="project_img">
              <img className="img" src={image}></img>
            </div>
            <div className="project_lang">
              <p>{lang}</p>
            </div>
            <div className="project_btn">
              <a href={websrc} target="_blank">
                <button>View Page</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
