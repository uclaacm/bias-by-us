import React, { useState } from "react";
import joeBruin from "../../assets/joeBruin.png";
import "./socialMedia.css";
import incomeIcon from "../../assets/income.svg";

export default function ProfileCreator(props) {
  const [currentGender, setCurrentGender] = useState("Select Gender");
  const [currentRace, setCurrentRace] = useState("Select Race");
  const [currentIncome, setCurrentIncome] = useState(30000);

  let activeGender = {
    maleClass: "male-button",
    femaleClass: "female-button",
  };

  function handleGenderClick(e) {
    setCurrentGender(e.target.value);
  }

  function handleRaceClick(e) {
    setCurrentRace(e.target.value);
  }

  function handleIncomeChange(e) {
    setCurrentIncome(e.target.value);
  }

  function handleGenerateProfile() {
    props.setGenderInput(currentGender);
    props.setRaceInput(currentRace);
    props.setIncomeInput(currentIncome);
    props.setProfileCreated(true);
  }

  function handleResetProfile() {
    props.setProfileCreated(false);
    props.setGenderInput("Select gender");
    props.setRaceInput("Select Race");
    props.setIncomeInput(0);
    setCurrentIncome(30000);
    setCurrentGender("Select gender");
    setCurrentRace("Select Race");
    setCurrentIncome(30000);
  }

  return (
    <div>
      <h1>My Profile</h1>
      <img
        className="generated-profile-pic"
        src={joeBruin}
        alt="Joe Bruin, UCLA's mascot"
      />

      <div>
        Gender
        <div className="spaced-row">
          <button
            className={
              currentGender == "male" ? "male-button-active" : "default-button"
            }
            value="male"
            onClick={(e) => handleGenderClick(e)}
          >
            Male
          </button>
          <button
            className={
              currentGender == "female"
                ? "female-button-active"
                : "default-button"
            }
            value="female"
            onClick={(e) => handleGenderClick(e)}
          >
            Female
          </button>
        </div>
      </div>

      <div>
        Race
        <div className="spaced-row">
          <button
            className={
              currentRace == "white" ? "white-button-active" : "default-button"
            }
            value="white"
            onClick={(e) => handleRaceClick(e)}
          >
            White
          </button>
          <button
            className={
              currentRace == "black" ? "black-button-active" : "default-button"
            }
            value="black"
            onClick={(e) => handleRaceClick(e)}
          >
            Black
          </button>
        </div>
      </div>

      <div>
        Income Level:
        <input
          type="range"
          min="30000"
          max="300000"
          step="10000"
          defaultValue="30000"
          value={currentIncome}
          onChange={(e) => handleIncomeChange(e)}
        />
      </div>
      <div>Selected Income: ${currentIncome}</div>

      <div>
        <button className="default-button" onClick={handleGenerateProfile}>
          Generate Profile
        </button>
      </div>
      <div>
        <button className="default-button" onClick={handleResetProfile}>
          Reset Profile
        </button>
        <p>DEBUGGING: Refreshed: {props.refreshes} times</p>
      </div>
    </div>
  );
}
