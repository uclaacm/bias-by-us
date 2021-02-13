import React, { useEffect, useState } from "react";
 import "./socialMedia.css";
 import "../mainContent/mainContent.css";
 import "./socialMedia.css";
 import AdHistogram from "./AdHistogram.js";
 import AdSelectionBar from "./AdSelectionBar";
 export default function AdBreakdown(props) {
     function handleSkipRefreshes(button) {
        let value = button.target.value;
        props.setRefreshes(value);
     }
     
     function toggleRefreshing(){
         props.setRefreshing((prevState) => {
             return !prevState;
         });
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
                    onClick= {handleSkipRefreshes}
                    >
                        Refresh 100 Times
                    </button>

                    <button
                    className = "default-button hover-button"
                    value = {1000}
                    onClick = {handleSkipRefreshes}
                    >
                        Refresh 1000 Times
                    </button>

                    <button
                    className = "default-button hover-button"
                    value = {1000}
                    onClick = {toggleRefreshing}
                    /* will add in functionality later */
                    >
                        {props.refreshing ? "Stop" : "Start"} Refreshing
                    </button>



                </div>

                
             </div>
             
             <div className = "spaced-row">
                 <AdSelectionBar 
                 histogramData = {props.adFrequencies}
                 setSelectedAd= {props.setSelectedAd}/>

                <AdHistogram
                histogramData={props.adFrequencies}
                /> 
             </div>
         </div>
     )
 }
  
