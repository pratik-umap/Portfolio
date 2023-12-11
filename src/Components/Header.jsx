import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const animationbar={
    initial:{opacity:0,y:-50},
    whileInView:{opacity:1,y:0},
    transition:{duration:1.5,delay:.5}
  }
  return (
    <div className="header">
      <motion.div 
      initial={animationbar.initial}
      whileInView={animationbar.whileInView}
      transition={{duration:1}}
      viewport={{ once: true }}
      className="header_logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">Prat!k</h2>
        </Link>
      </motion.div>

      <motion.ul 
      initial={animationbar.initial}
      whileInView={animationbar.whileInView}
      transition={animationbar.transition}
      viewport={{ once: true }}
      className="header_list" id="leftside_bar">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li className="list_items">About</li>
        </Link>
        <Link to="/skill" style={{ textDecoration: "none" }}>
          <li className="list_items">Skill</li>
        </Link>
        <Link to="/project" style={{ textDecoration: "none" }}>
          <li className="list_items">Project</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li className="list_items items_hide">Contact</li>
        </Link>
      </motion.ul>
    </div>
  );
}

export default Header;
