import React from "react";
 import "./socialMedia.css";
 import "../mainContent/mainContent.css";
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
         <div>
             <div className = "histogram-header">
                <div>
                    Most Frequently Displayed Ads
                </div>
                <div>
                    Refreshed: {props.refreshes} times
                </div>
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
                    /* will add in functionality later */
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
  
