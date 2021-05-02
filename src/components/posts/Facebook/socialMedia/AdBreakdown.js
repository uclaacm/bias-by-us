import React, { useContext } from "react";
import { SocialMediaContext } from "./socialMediaHandler";
import "./socialMedia.css";
import "../../../mainContent/mainContent.css";
import "./socialMedia.css";
import AdHistogram from "./AdHistogram.js";

export default function AdBreakdown(props) {
  const {
    setRefreshes,
    resetAds,
    refreshes,
    adFrequencies,
    dispatchAdFrequencies,
    adDataSet,
  } = useContext(SocialMediaContext);
  function handleAddRefreshes(button) {
    let value = button.target.value;
    setRefreshes((prevValue) => {
      return parseInt(prevValue) + parseInt(value);
    });
    pickAd(value);
  }

  function pickAd(value) {
    let newAdFrequencies = [...adFrequencies];
    for (let i = 0; i < value; i++) {
      let prob = Math.random();
      let threshold = 0;
      //randomly select ad from dataset
      for (let job of newAdFrequencies) {
        threshold += parseFloat(job.adPercentages[adDataSet]);
        if (threshold > prob) {
          dispatchAdFrequencies({ type: "increment", payload: job.x });
          break; //exit once ad is selected
        }
      }
    }
    //sort adFrequencies by y value
    dispatchAdFrequencies({ type: "sort" });
  }

  function resetRefreshes() {
    resetAds();
  }
  return (
    <div className="ad-breakdown-container">
      <div className="histogram-header">
        <p className="text-bold">Most Frequently Displayed Ads</p>
        <p>Refreshed: {refreshes} times</p>
        <div className="spaced-row">
          <button
            className="default-button hover-button"
            value={100}
            onClick={handleAddRefreshes}
          >
            Refresh 100 Times
          </button>

          <button
            className="default-button hover-button"
            value={1000}
            onClick={handleAddRefreshes}
          >
            Refresh 1000 Times
          </button>

          <button
            className="default-button hover-button"
            onClick={resetRefreshes}
          >
            Reset Refreshes
          </button>
        </div>
      </div>

      <div className="spaced-row">
        <AdHistogram histogramData={adFrequencies} />
      </div>
    </div>
  );
}
