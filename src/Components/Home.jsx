import React from "react";
import "../style/Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-image">
          <div className="main_image"></div>
          <div className="image_1"></div>
        </div>

        <div className="main_info">
          <h2>Hi,👋 I'm Pratik Umap</h2>

          <h2 id="typewriterpara">
            <Typewriter
              options={{
                strings: [
                  "A Web Developer",
                  "A Frontend Developer",
                  "A MERN Developer",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </h2>

          <h3>
            I'm Frontend Developer. I craft user interface using modern frontend
            web technologies.
          </h3>

          <div className="social_media">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100080216476957"
                  target="_blank"
                >
                  <img
                    className="social_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077041.png"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pratik_13_/" target="_blank">
                  <img
                    className="social_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pratik-umap-5a3738237/"
                  target="_blank"
                >
                  <img
                    className="social_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077043.png"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/pratik_umap" target="_blank">
                  <img
                    className="social_img"
                    id="last_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077032.png"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          <h4>
            <a
              href={require("../PDF/Pratik-resume.pdf")}
              download="Pratik-Resume.pdf"
            >
              <button className="btn">Download CV</button>
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
