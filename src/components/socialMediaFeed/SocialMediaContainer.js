import React, { useState, useEffect } from "react";
import ProfileCreator from "./ProfileCreator.js";
import AdDisplay from "./AdDisplay.js";
import AdBreakdown from "./AdBreakdown.js";
import "./socialMedia.css";

export default function SocialMediaContainer(props) {
  const ADFREQUENCY = 200;
  const [genderInput, setGenderInput] = useState("Select Gender");
  const [raceInput, setRaceInput] = useState("Select Race");
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
  const MAXREFRESHES = 10;
  const [refreshAd, setRefreshAd] = useState(null);
  const initialTallies = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  //will replace with function that actually chooses Ads based off of profile
  function placeholderSelectAd() {
    //Will replace with an actual selecting ad function later
    setRefreshTallies((prevRefreshes) => {
      prevRefreshes[0]++;
      const newRefreshes = prevRefreshes;
      return newRefreshes;
    });
    console.log("ad selected!");
  }
  //increment the refreshes of the ad
  function incrementRefreshes() {
    setRefreshes((prevRefreshes) => prevRefreshes + 1);
    placeholderSelectAd();
    console.log("incrementing refreshes");
  }

  //Cleanup function to be used
  function clearHistogram() {
    console.log("refreshAd is " + refreshAd);
    clearInterval(refreshAd);
    setRefreshTallies(initialTallies);
    setRefreshes(0);
    console.log("Histogram cleaned up");
  }
  //Trigger/stop interval when a profile is created/reset
  useEffect(() => {
    console.log("effect ran");
    //this effect runs whenever profileCreated changes
    if (profileCreated === true && refreshes === 0) {
      console.log("activated histogram");
      setRefreshAd(
        //this is an interval that chooses a new ad every
        setInterval(() => {
          incrementRefreshes();
          console.log("interval ran");
        }, ADFREQUENCY)
      );
    } else if (profileCreated === false) {
      console.log("deactivated histogram");
      clearHistogram();
      setRefreshTallies(initialTallies);
    } else clearHistogram();
    // eslint-disable-next-line
  }, [profileCreated]);

  //clear the interval when we reach the max # of refreshes
  useEffect(() => {
    if (refreshes >= MAXREFRESHES) clearInterval(refreshAd);
    // eslint-disable-next-line
  }, [refreshes]);

  return (
    <div className="social-media-container">
      <div className="spaced-row">
        <div className="screen-container">
          <ProfileCreator
            genderInput={genderInput}
            setGenderInput={setGenderInput}
            raceInput={raceInput}
            setRaceInput={setRaceInput}
            profileCreated={profileCreated}
            setProfileCreated={setProfileCreated}
            refreshes={refreshes}
          />
        </div>
        <div className="screen-container">
          <AdDisplay
            genderInput={genderInput}
            raceInput={raceInput}
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
              profileCreated={profileCreated}
              refreshes={refreshes}
              setRefreshes={setRefreshes}
              refreshTallies={refreshTallies}
              setRefreshTallies={setRefreshTallies}
              ADFREQUENCY={ADFREQUENCY}
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
