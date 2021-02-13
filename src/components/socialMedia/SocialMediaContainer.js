import React, {useState, useEffect } from "react";
import ProfileCreator from "./ProfileCreator";
import AdBreakdown from "./AdBreakdown";
import AdDisplay from "./AdDisplay";
import "./socialMedia.css";
import "../mainContent/mainContent.css";
import "../../assets/labContent";
import initialAds from "./initialAds.js";
export default function SocialMediaContainer(props){

    //state variables
    const [genderInput, setGenderInput]= useState("unselected");
    const [raceInput, setRaceInput] = useState("unselected");
    const [profileCreated, setProfileCreated] = useState(false);
    const [refreshes, setRefreshes] = useState(0);
    const [adFrequencies, setAdFrequencies] = useState(initialAds.adList);
    const [selectedAd, setSelectedAd]= useState();
    const [refreshing, setRefreshing] = useState(true);

    return (
        <div className = "flex-column">
            <div className = "spaced-row">
                <div className = "screen-container">
                    <ProfileCreator
                    genderInput = {genderInput}
                    setGenderInput={setGenderInput}
                    raceInput = {raceInput}
                    setRaceInput={setRaceInput}
                    profileCreated={profileCreated}
                    setProfileCreated={setProfileCreated}
                    setRefreshes={setRefreshes}
                    />
                </div>
                { selectedAd && /* conditionally render the ad portion*/
                <div className = "screen-container">
                    <AdDisplay
                    selectedAd ={selectedAd}/>
                </div>

                }

            </div>
            {profileCreated &&
            <div className = "spaced-row">
                <AdBreakdown
                adFrequencies={adFrequencies}
                refreshes = {refreshes}
                setRefreshes={setRefreshes}
                setSelectedAd={setSelectedAd}
                refreshing={refreshing}
                setRefreshing={setRefreshing}/>
            </div>
            }
            
        </div>
    )
}