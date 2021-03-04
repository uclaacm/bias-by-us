import React from "react";

export default function AdDisplay(props){
    
    if (props.selectedAd === "default")
        return (
            <div id ="shown-ad">
                Select a section to display its ad
            </div>
        )
    return (
        <div id ="shown-ad">
            Will display the {props.selectedAd} ad
        </div>
    )
}