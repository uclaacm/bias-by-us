import React, { useState, useContext } from "react";
import { SocialMediaContext } from "./socialMediaHandler";
import joeBruin from "../../../../assets/joebruin.svg";
import "./socialMedia.css";
import "../../../mainContent/mainContent.css";

export default function ProfileCreator(props) {
  const {
    setCurrentGender,
    setCurrentRace,
    setSelectedAd,
    resetAds,
    setProfileCreated,
    profileCreated,
  } = useContext(SocialMediaContext);
  const [genderInput, setgenderInput] = useState("unselected");
  const [raceInput, setraceInput] = useState("unselected");
  function handleGenderClick(e) {
    if (!profileCreated) setgenderInput(e.target.value);
  }

  function handleRaceClick(e) {
    if (!profileCreated) setraceInput(e.target.value);
  }

  function generateProfile() {
    if (genderInput !== "unselected" && raceInput !== "unselected") {
      setCurrentGender(genderInput);
      setCurrentRace(raceInput);
      setSelectedAd("default");
      resetAds();
      setProfileCreated(true);
    }
  }

  function resetProfile() {
    setCurrentGender("unselected");
    setCurrentRace("unselected");
    setgenderInput("unselected");
    setraceInput("unselected");
    resetAds();
    setSelectedAd(null);
    setProfileCreated(false);
  }

  return (
    <div>
      <div className="iphone-top"></div>
      <div className="iphone-screen">
        <div className="profile-header" id="user-profile">
          Generated Profile
        </div>
        <div>
          <img
            className="user-profile-pic"
            src={joeBruin}
            alt="Joe Bruin, UCLA's mascot"
          />
        </div>
        <div>
          <div> Gender </div>
          <div>
            <button
              className={
                /* conditionally render what button appears*/
                `default-button ${
                  genderInput === "male" ? "male-button-active" : "hover-button"
                } `
              }
              value="male"
              onClick={handleGenderClick}
            >
              Male
            </button>
            <button
              className={`default-button ${
                genderInput === "female"
                  ? "female-button-active"
                  : "hover-button"
              } `}
              value="female"
              onClick={handleGenderClick}
            >
              Female
            </button>
          </div>
        </div>
        <div>
          <div> Race </div>
          <div>
            <button
              className={`default-button ${
                raceInput === "white" ? "white-button-active" : "hover-button"
              } `}
              value="white"
              onClick={handleRaceClick}
            >
              White
            </button>
            <button
              className={`default-button ${
                raceInput === "black" ? "black-button-active" : "hover-button"
              } `}
              value="black"
              onClick={handleRaceClick}
            >
              Black
            </button>
          </div>
        </div>
        <div>
          <button
            className="default-button long-button hover-button"
            onClick={generateProfile}
          >
            Generate Profile
          </button>
        </div>
        <div>
          <button
            className="default-button long-button hover-button"
            onClick={resetProfile}
          >
            Reset Profile
          </button>
        </div>
      </div>
    </div>
  );
}
