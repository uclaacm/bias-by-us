import React, { useState} from "react";
import ProfileCreator from "./ProfileCreator";
import AdBreakdown from "./AdBreakdown";
import AdDisplay from "./AdDisplay";
import "./socialMedia.css";
import "../mainContent/mainContent.css";
import "../../assets/labContent";
import initialAds from "./initialAds.js";
export default function SocialMediaContainer(props){

    //state variables
    const [currentGender, setCurrentGender]= useState("unselected");
    const [currentRace, setCurrentRace] = useState("unselected");
    const [profileCreated, setProfileCreated] = useState(false);
    const [refreshes, setRefreshes] = useState(0);
    const [adFrequencies,] = useState(initialAds.adList); //setAdFrequencies & intervals to be added later
    const [selectedAd, setSelectedAd]= useState(null);
    const [refreshing, setRefreshing] = useState(false);


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
                    setSelectedAd = {setSelectedAd}
                    refreshing = {refreshing}
                    setRefreshing = {setRefreshing}/>
                </div>
            }
            
        </div>
    )
}