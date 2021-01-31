import React, { useEffect, useState } from "react";
import "./socialMedia.css";
import "../mainContent/mainContent.css";
import "./AdHistogram.js";
import AdHistogram from "./AdHistogram.js";

export default function AdBreakdown(props) {
  const [refreshes] = useState(props.refreshes);
  const [refreshTallies, setRefreshTallies] = useState(props.refreshTallies);

  useEffect(() => {
    console.log("refresh tallies changed!");
  }, [refreshTallies]);

  return (
    <div>
      <div>Top 10 Advertisements Shown To You</div>
      <AdHistogram
        refreshes={refreshes}
        refreshTallies={refreshTallies}
        setRefreshTallies={setRefreshTallies}
        ADFREQUENCY={props.ADFREQUENCY}
      />
      <div>Refreshed: {props.refreshes} times</div>
    </div>
  );
}
