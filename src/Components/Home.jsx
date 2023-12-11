import React,{ useState } from "react";
import "../style/Home.css";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion"
import { useEffect } from "react";

function Home() {

  const [windowLength, setWindowLength] = useState(window.innerWidth);

 useEffect(() => {
 const windowHandler = () => {
    setWindowLength(window.innerWidth);
    console.log(windowLength);
  }
  window.addEventListener("resize",windowHandler );

   return () => {
     window.removeEventListener("resize",windowHandler)
   }
 }, [windowLength])
 
  return (
    <div className="home">
      <div className="home-content">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1}}
           transition={{ duration: 1 }}
        className="home-image">
          <div className="main_image"></div>
        </motion.div>

        <motion.div
         {...(windowLength > 480
          ? {
              initial: { opacity: 0, x: 150 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1 },
            }
          : {
              initial: { opacity: 0, y: 48 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1 },
            })}
          className="main_info">
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
                  target="blank"
                >
                  <img
                    className="social_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077041.png"
                    alt="image1"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pratik_13_/" target="blank">
                  <img
                    className="social_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
                    alt="image2"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pratik-umap-5a3738237/"
                  target="blank"
                >
                  <img
                    className="social_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077043.png"
                    alt="image3"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/pratik_umap" target="blank">
                  <img
                    className="social_img"
                    id="last_img"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077032.png"
                    alt="image4"
                  />
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
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
