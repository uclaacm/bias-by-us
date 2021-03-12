import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
      <button className="button" aria-label="Navigation Bar Button" onClick={dropdownHandler}>
        <div className={`triangle ${dropdownOpen ? "up" : ""}`}></div>
        {dropdownOpen && (
          <div class="dropdown">
            <div class="dropdown-content">
              <nav>
                  <Link to='/'>Landing Page</Link>
                  <Link to='/'>About Us</Link>
                  <Link to='/'>Case Study #1</Link>
                  <Link to='/'>Case Study #2</Link>
                  <Link to='/'>Case Study #3</Link>
                  <Link to='/'>Conclusion</Link>
                  <Link to='/'>Resources</Link>
              </nav>
            </div>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="navbar">
      {/* the TeachLA logo will be a link to ACM TeachLA's website*/}
      <a href="https://teachla.uclaacm.com" aria-label="go to TeachLA's website">
        <img src={teachLogo} alt="TeachLA icon" className="logo" />
      </a>
      {/* 'Bias by Us' will be a link -- clicking on it will go to the introduction page of our learning lab */}
      <h1 className="title">Bias by Us</h1>
      <h2 className="subtitle">Case Study #2: Facebook Ads</h2>
      {dropdownArea()}
    </div>
  );
}
