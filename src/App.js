import React, { useState } from "react";
import "./AppMain.css";
import teachLogo from "./assets/teachla-logo.svg";

function App() {
  // Posts: list variable containing Post component objects for every post in the case study, most likely to be imported through a different file
  //const [Posts, setPosts] = useState([]);

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
          <div className="dropdown-placeholder">dropdown menu</div>
        )}
      </button>
    );
  };

  return (
    <div className="app">
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

      {/* below are Progress Bar and Direction Buttons placeholders*/}
      <div className="progress-bar">progress bar</div>
      <div className="direction-buttons">direction buttons</div>

      <div className="posts">
        {/* below are sample Post placeholders */}
        <p className="sample-post">post 1</p>
        <p className="sample-post">post 2</p>
        <p className="sample-post">post 3</p>
        {/* this mapping function will render the actual list of Posts */}
        {/*
          Posts.map((post, index) => {
            return <Post content={post} key={index} />
          })
          */}
      </div>
    </div>
  );
}
export default App;
