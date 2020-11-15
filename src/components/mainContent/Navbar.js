import React, { useState } from "react";
import teachLogo from "../../assets/teachla-logo.svg";
import "../../AppMain.css";
import "../../index.css";
import './Navbar.css';

export default function NavBar(props) {
  // dropdownOpen: boolean variable for whether the dropdown menu is open or closed
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // dropdownHandler: arrow function that switches dropdownOpen value whenever the button is toggled
  const dropdownHandler = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // dropdownArea: arrow function that returns the apporpriate button (and dropdown menu if applicable) depending on whether dropdownOpen is true/false
  const dropdownArea = () => {
    return (
      <button className="button" onClick={dropdownHandler}>
        <div className={`triangle ${dropdownOpen ? "up" : ""}`}></div>
        {dropdownOpen && (
          <div class="dropdown">
            <div class="dropdown-content">
              <a href="#">Landing Page</a>
              <a href="#">About Us</a>
              <a href="#">Case Study #1</a>
              <a href="#">Case Study #2</a>
              <a href="#">Case Study #3</a>
              <a href="#">Conclusion</a>
              <a href="#">Resources</a>
            </div>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="navbar">
      {/* the TeachLA logo will be a link to ACM TeachLA's website*/}
      <a href="https://teachla.uclaacm.com">
        <img src={teachLogo} alt="TeachLA icon" className="logo" />
      </a>
      {/* 'Bias by Us' will be a link -- clicking on it will go to the introduction page of our learning lab */}
      <h1 className="title">Bias by Us</h1>
      <h2 className="subtitle">Case Study #2: Facebook Ads</h2>
      {dropdownArea()}
    </div>
  );
}
