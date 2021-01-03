import React, { useState, useEffect } from "react";
import ProfileCreator from "./ProfileCreator.js";
import AdDisplay from "./AdDisplay.js";
import AdBreakdown from "./AdBreakdown.js";
import "./socialMedia.css";

export default function SocialMediaContainer(props) {
  const [genderInput, setGenderInput] = useState("Select Gender");
  const [raceInput, setRaceInput] = useState("Select Race");
  const [incomeInput, setIncomeInput] = useState(0);
  const [profileCreated, setProfileCreated] = useState(false);
  const [refreshes, setRefreshes] = useState(0);
  const [refreshTallies, setRefreshTallies] = useState([
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
  ]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  return (
    <div className="social-media-container">
      <div className="spaced-row">
        <div className="screen-container">
          <ProfileCreator
            genderInput={genderInput}
            setGenderInput={setGenderInput}
            raceInput={raceInput}
            setRaceInput={setRaceInput}
            incomeInput={incomeInput}
            setIncomeInput={setIncomeInput}
            profileCreated={profileCreated}
            setProfileCreated={setProfileCreated}
            refreshes={refreshes}
          />
        </div>
        <div className="screen-container">
          <AdDisplay
            genderInput={genderInput}
            raceInput={raceInput}
            incomeInput={incomeInput}
            profileCreated={profileCreated}
            refreshes={refreshes}
          />
        </div>
      </div>
      {
        <div className="ad-breakdown">
          {profileCreated ? (
            <AdBreakdown
              genderInput={genderInput}
              raceInput={raceInput}
              incomeInput={incomeInput}
              profileCreated={profileCreated}
              refreshes={refreshes}
              setRefreshes={setRefreshes}
              refreshTallies={refreshTallies}
              setRefreshTallies={setRefreshTallies}
            />
          ) : (
            <p>
              Generate a user profile to see a breakdown of what ads are shown
              to this user!
            </p>
          )}
        </div>
      }
    </div>
  );
}

let baseline = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
