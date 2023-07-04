import React, { useState } from "react";
import "../style/Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Header() {
  const [open, setOpen] = useState(false);
  function handleToggle() {
    setOpen((open) => !open);
    const navMenu = document.getElementById("leftside_bar");

    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "block";
    }
  }

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">Prat!k</h2>
        </Link>
      </div>

      <ul className="header_list" id="leftside_bar">
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
      </ul>
    </div>
  );
}

export default Header;
