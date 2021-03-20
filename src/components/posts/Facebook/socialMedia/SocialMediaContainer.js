import React, { useState, useEffect, useReducer} from "react";
import ProfileCreator from "./ProfileCreator";
import AdBreakdown from "./AdBreakdown";
import AdDisplay from "./AdDisplay";
import "./socialMedia.css";
import "../../../mainContent/mainContent.css";
import "../../../../assets/labContent";
import initialAds from "./initialAds.js";

//Reducer setup outside of component
const initialFreqs = [...initialAds.adList];
const reducer = (adFrequencies, action) => {
    switch(action.type){
        //reset the ads back to zero
        case "reset": {
            return adFrequencies.map(
                (job) => {
                    return {...job, y : 0 }; 
                }
            )
        }

        case "increment": {
            //increment just one part of the ad (more efficent than using state)
            return adFrequencies.map(
                (job) => {
                    if (job.x === action.payload)
                        return {...job,  y: job.y +1};
                    else return job;
                }
            )
        }

        case "sort": {
            //sort the ads
                return adFrequencies.sort( (a,b) => {
                    return b.y - a.y;
                });
        }

        default:
            break;
    }


}

export default function SocialMediaContainer(props){

    //state variables
    const [currentGender, setCurrentGender]= useState("unselected");
    const [currentRace, setCurrentRace] = useState("unselected");
    const [profileCreated, setProfileCreated] = useState(false);
    const [refreshes, setRefreshes] = useState(0);
    const [selectedAd, setSelectedAd]= useState(null);
    const [adDataSet, setAdDataSet] = useState(-1);
    const [adFrequencies, dispatchAdFrequencies] = useReducer(reducer, initialFreqs);

    

    function resetAds() {
        dispatchAdFrequencies({type: "reset"});
        setRefreshes(0);
        setSelectedAd("default");
    }
    

    function pickAd(value){
        let newAdFrequencies = [...adFrequencies];
        for (let i=0; i < value; i++){
            let prob = Math.random();
            let threshold=0;
            //randomly select ad from dataset
            for (let job of newAdFrequencies){
                threshold += parseFloat(job.adPercentages[adDataSet]);
                if (threshold > prob){
                    dispatchAdFrequencies({type: "increment", payload: job.x})
                    break; //exit once ad is selected
                }
                
            }
        }
        //sort adFrequencies by y value
        dispatchAdFrequencies({type: "sort"});
    }



    //change dataSet to the correct one to examine based off of user's profile
    //whenever profileCreated is changed
    useEffect(() => {
        if (profileCreated === false)
            setAdDataSet(-1);
        else if (currentGender === "male" && currentRace === "white")
            setAdDataSet(0);
        else if (currentGender === "male" && currentRace === "black")
            setAdDataSet(1);
        else if (currentGender === "female" && currentRace === "white")
            setAdDataSet(2);
        else if (currentGender === "female" && currentRace === "black")
            setAdDataSet(3);
        //even though profileCreated, still including currentGender & currentRace in dependency array
    }, [profileCreated, currentGender, currentRace]); 


    return (
        <div className = "flex-column">
            <div className = "spaced-row">
                <div className = "screen-container">
                    <ProfileCreator
                        currentGender = {currentGender}
                        setCurrentGender = {setCurrentGender}
                        currentRace = {currentRace}
                        setCurrentRace = {setCurrentRace}
                        profileCreated = {profileCreated}
                        setProfileCreated = {setProfileCreated}
                        setRefreshes = {setRefreshes}
                        setSelectedAd = {setSelectedAd}
                        resetAds = {resetAds}
                    />
                </div>
                { 
                    selectedAd && /* conditionally render the ad portion*/
                    <div className = "screen-container">
                        <AdDisplay selectedAd ={selectedAd}/>
                    </div>
                }
            </div>
            {
                profileCreated && /* conditionally render the ad breakdown portion */
                <div className = "spaced-row">
                    <AdBreakdown
                        adFrequencies = {adFrequencies}
                        refreshes = {refreshes}
                        setRefreshes = {setRefreshes}
                        adDataSet = {adDataSet}
                        setSelectedAd = {setSelectedAd}
                        pickAd = {pickAd}
                        resetAds = {resetAds}
                    />
                </div>
            }
            
        </div>
    )
}