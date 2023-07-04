import React from "react";
import Project from "./Project";
import "../style/ProjectAll.css";

function ProjectAll() {
  let arr = [
    {
      name: "Social Media App",
      image:
        "https://img.freepik.com/free-vector/social-media-icons_53876-89122.jpg",
      lang: "MongoDb, Express,React Js,Node Js",
      websrc: "https://lazy-pike-sun-hat.cyclic.app/",
    },
    {
      name: "Amazon Clone",
      image:
        "https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-amazon-512.png",
      lang: "React JS , Firebase",
      websrc: "https://clone-22ee4.web.app",
    },
    {
      name: "Weather Web",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58HIQc11qbTAqBshsEJQd7SZAj5jhjD_LLA&usqp=CAU",
      lang: "React JS,weather API",
      websrc: "https://pratik-umap.github.io/WeatherApp/",
    },
    {
      name: "Image Web",
      image:
        "https://becomeawritertoday.com/wp-content/uploads/2020/08/Best-Stock-Photo-Sites-For-High-Quality-Images.png",
      lang: "React Js,Unsplash API",
      websrc: "https://pratik-umap.github.io/photos/",
    },
  ];
  return (
    <div className="projectall">
      <div className="project_name">
        <h3>My Projects</h3>
      </div>

      <div className="project_section">
        {arr.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            image={project.image}
            lang={project.lang}
            websrc={project.websrc}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectAll;
