import React, { useState, useEffect } from "react";
import "./socialMedia.css";
import "../mainContent/mainContent.css";
import "./AdHistogram.js";
import AdHistogram from "./AdHistogram.js";

export default function AdBreakdown(props) {
  //TODO: Why isn't the refreshed counter going up even though the incrementRefreshes function is running?
  useEffect(() => {
    let refreshAd = setInterval(() => {
      incrementRefreshes();
      console.log("interval ran");
    }, 1000);
    if (props.profileCreated === true && props.refreshes > 1000) {
      clearInterval(refreshAd);
      props.setRefreshes(0);
    }
    if (props.profileCreated === false) {
      clearInterval(refreshAd);
      console.log("interval cleared");
      props.setRefreshes(0);
      console.log("effect ran");
      props.setRefreshTallies(baseline);
    }

    return function cleanup() {
      clearInterval(refreshAd);
      props.setRefreshTallies(baseline);
      props.setRefreshes(0);
      console.log("function cleaned up");
    };
  }, [props.profileCreated]);

  function incrementRefreshes() {
    console.log("incrementing refreshes");
    props.setRefreshes(props.refreshes + 1);
    placeholderSelectAd();
  }

  function placeholderSelectAd() {
    let prevState = props.refreshTallies;
    prevState[0]++;
    let newState = prevState;
    props.setRefreshTallies(newState);
  }

  return (
    <div>
      <div>Top 10 Advertisements Shown To You</div>
      <AdHistogram
        refreshes={props.refreshes}
        refreshTallies={props.refreshTallies}
      />
      <div>Refreshed: {props.refreshes} times</div>
    </div>
  );
}

let baseline = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
