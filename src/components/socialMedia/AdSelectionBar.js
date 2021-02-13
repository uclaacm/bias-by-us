import React from "react";
import "./socialMedia.css";
export default function AdSelectionBar(props){
    //mapping function that generates a button for each section of the already sorted histogram
    let buttonBar = props.histogramData.map((section) => {
        console.log (section.x);
        return (
                <button className = "ad-button" value={`${section.x}`} key = {section.x} onClick={selectAd}>
                    <img className= "ad-thumbnail" src={section.thumbnail} alt={`display the ${section.x} ad`}/>
                </button>
        )
    });

    function selectAd(button){
        console.log ("value is " + button.currentTarget.value)
        props.setSelectedAd(button.currentTarget.value);
    }
    return(
        <div className = "ad-selection-bar">
            {buttonBar}
        </div>  
    )
}