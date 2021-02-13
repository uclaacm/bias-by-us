import React, {useEffect} from "react";
import "./socialMedia.css";
export default function AdSelectionBar(props){
    let buttonBar = props.histogramData.map((section) => {
        console.log (section.x);
        return (
                <button className = "ad-button" value={`${section.x}`} key = {section.x} onClick={selectAd}>
                    <img className= "ad-thumbnail" src={section.thumbnail} alt={`display the ${section.x} ad`}/>
                </button>
        )
    });

    function selectAd(button){
        console.log ("value is " + button.target.value)
        props.setSelectedAd(button.target.value);
    }
    return(
        <div className = "ad-selection-bar">
            {buttonBar}
        </div>
    )
}