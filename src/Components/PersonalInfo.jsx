import "../style/PersonalInfo.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

function Personal() {
  const animationbar={
    initial:{opacity:0,y:15},
    whileInView:{opacity:1,y:0},
    transition:{duration:1}
  }
  return (
    <div className="personal-info">
      <div className="personal">
      <h3>Peronal Information</h3>

      <motion.div 
         initial={animationbar.initial}
         whileInView={animationbar.whileInView}
         transition={animationbar.transition}
      className="personal_content">
        <ul className="content_list_1">
          <li>
            First Name: <span>Pratik</span>
          </li>
          <li>
            Email: <span>pratikumap137@gmail.com</span>
          </li>
          <li>
            Language: <span>English, Hindi, Marathi</span>
          </li>
        </ul>
        <ul className="content_list_2">
          <li>
            Last Name: <span>Umap</span>
          </li>
          <li>
            Nationality: <span>Indian</span>
          </li>
        </ul>
      </motion.div>
      <div className="education_info">
        <h3>Education</h3>
        <ul className="education_list">

          <motion.li 
            initial={animationbar.initial}
            whileInView={animationbar.whileInView}
            transition={animationbar.transition}
          className="education_sublist">
            <div className="education_icon">
              <img
                src="http://edinareact.ibthemespro.com/img/about/book.png"
                alt=""
              ></img>
            </div>
            <div className="education_name">
              <h3>Bachelor of Engineering, Computer Engg</h3>
              <h5>ISB&M School of Technology, Pune, India</h5>
              <div className="education_date">
                <CalendarTodayIcon id="cal_logo" />
                <h5>Aug 2019 - Jun 2023</h5>
              </div>
            </div>
          </motion.li>

          <motion.li 
             initial={animationbar.initial}
             whileInView={animationbar.whileInView}
             transition={animationbar.transition}
          className="education_sublist">
            <div className="education_icon">
              <img
                src="http://edinareact.ibthemespro.com/img/about/book.png"
                alt=""
              ></img>
            </div>
            <div className="education_name">
              <h3>Higher Secondary Education</h3>
              <h5>MIT, Pune, India</h5>
              <div className="education_date">
                <CalendarTodayIcon id="cal_logo" />
                <h5>Aug 2017 - Jun 2019 </h5>
              </div>
            </div>
          </motion.li>

        </ul>
      </div>
      <div className="back_button">
        <Link to="./About">
          <div className="back_btn">
            <ArrowBackIcon id="back" />
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Personal;
