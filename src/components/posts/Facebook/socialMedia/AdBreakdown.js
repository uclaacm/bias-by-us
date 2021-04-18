import React from "react";
 import "./socialMedia.css";
 import "../../../mainContent/mainContent.css";
 import "./socialMedia.css";
 import AdHistogram from "./AdHistogram.js";
 export default function AdBreakdown(props) {
     function handleAddRefreshes(button) {
        let value = button.target.value;
        props.setRefreshes((prevValue) => {
            return(
                parseInt(prevValue) + parseInt(value)
            )
        });
        props.pickAd(value);
     }
     
     function resetRefreshes(){
        props.resetAds();
     }
     return(
         <div className="ad-breakdown-container">
             <div className = "histogram-header">
                <p className = "text-bold">
                    Most Frequently Displayed Ads
                </p>
                <p>
                    Refreshed: {props.refreshes} times
                </p>
                <div className = "spaced-row">
                    <button
                        className = "default-button hover-button"
                        value = {100}
                        onClick= {handleAddRefreshes}
                    >
                        Refresh 100 Times
                    </button>

                    <button
                        className = "default-button hover-button"
                        value = {1000}
                        onClick = {handleAddRefreshes}
                    >
                        Refresh 1000 Times
                    </button>

                    <button
                        className = "default-button hover-button"
                        onClick = {resetRefreshes}
                    >
                        Reset Refreshes
                    </button>



                </div>

                
             </div>
             
             <div className = "spaced-row">

                <AdHistogram
                histogramData={props.adFrequencies}
                setSelectedAd = {props.setSelectedAd}
                /> 
             </div>
         </div>
     )
 }
  