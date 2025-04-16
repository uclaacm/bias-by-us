import React, { useState } from "react";
import { Link, useParams } from "react-router";
import teachLogo from "../../assets/teachla-logo.svg";
import navButton from "../../assets/navButton.svg";
import "../../main.css";
import "../../index.css";
import "./navbar.css";

export default function NavBar(props) {
  const params = useParams();

  // dropdownOpen: boolean variable for whether the dropdown menu is open or closed
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // dropdownHandler: arrow function that switches dropdownOpen value whenever the button is toggled
  const dropdownHandler = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // on the homepage (/), currentPage is intentionally undefined
  const currentPage = params.currentPage;

  const subtitle = getHeader(currentPage);

  const navSections = [
    {
      path: "/",
      name: "Landing Page",
    },
    {
      path: "/aboutUs",
      name: "About Us",
    },
    {
      path: "/college",
      name: "Case Study #1",
    },
    {
      path: "/facebook",
      name: "Case Study #2",
    },
    {
      path: "/facialRecognition",
      name: "Case Study #3",
    },
    {
      path: "/conclusion",
      name: "Conclusion",
    },
    {
      path: "/resources",
      name: "Resources",
    },
  ];

  //arrow function that maps all our links to dropdown
  const getNavlinks = () =>
    navSections.map((section) => (
      <Link
        className={props.path === section.path && "current-link"}
        to={section.path}
      >
        {section.name}
      </Link>
    ));
  // dropdownArea: arrow function that returns the apporpriate button (and dropdown menu if applicable) depending on whether dropdownOpen is true/false
  const dropdownArea = () => {
    return (
      <button
        className="nav-button"
        aria-label="Navigation Bar Button"
        onClick={dropdownHandler}
      >
        <img
          className={`nav-button-image ${dropdownOpen && `rotate`}`}
          src={navButton}
          alt="arrow to expand table of contents"
        ></img>
        {dropdownOpen && (
          <div className="dropdown">
            <div className="dropdown-content">
              <nav>{getNavlinks()}</nav>
            </div>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="navbar">
      {/* the TeachLA logo will be a link to ACM TeachLA's website*/}
      <a
        href="https://teachla.uclaacm.com"
        aria-label="go to TeachLA's website"
      >
        <img src={teachLogo} alt="TeachLA icon" className="logo" />
      </a>
      {/* 'Bias by Us' will be a link -- clicking on it will go to the introduction page of our learning lab */}
      <div className="title-container">
        <Link className="title-link" to="/">
          <h1 className="title">Bias by Us</h1>
        </Link>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
      {dropdownArea()}
    </div>
  );
}

//function that renders the heading for the navbar from the route parameters
function getHeader(path) {
  let subtitle = "A TeachLA Learning Lab!";
  const pageNames = {
    aboutUs: "Who's TeachLA?",
    college: "Case Study #1: College Admissions",
    facebook: "Case Study #2: Facebook Ads",
    facialRecognition: "Case Study #3: Facial Recognition",
    conclusion: "In Conclusion...",
    resources: "To Learn More...",
  };
  //return default dictionary value if path is falsy

  //get the subtitle from our pageNames dictionary if path exists
  if (path) ({ [path]: subtitle } = pageNames);
  return subtitle;
}
