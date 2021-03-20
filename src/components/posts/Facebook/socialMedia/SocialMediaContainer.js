import React, { useState, useEffect} from "react";
import ProfileCreator from "./ProfileCreator";
import AdBreakdown from "./AdBreakdown";
import AdDisplay from "./AdDisplay";
import "./socialMedia.css";
import "../../../mainContent/mainContent.css";
import "../../../../assets/labContent";
import initialAds from "./initialAds.js";
export default function SocialMediaContainer(props){

    //state variables
    const [currentGender, setCurrentGender]= useState("unselected");
    const [currentRace, setCurrentRace] = useState("unselected");
    const [profileCreated, setProfileCreated] = useState(false);
    const [refreshes, setRefreshes] = useState(0);
    const [adFrequencies, setAdFrequencies] = useState(null); //setAdFrequencies & intervals to be added later
    const [selectedAd, setSelectedAd]= useState(null);
    const [adDataSet, setAdDataSet] = useState(-1);

    //set adFrequencies when component mounts
    useEffect(() => {
        setAdFrequencies([...initialAds.adList]);
    },[]);


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
        
    }, [profileCreated, currentGender, currentRace]); //even though profileCreated, still including currentGender & currentRace in dependency array


    function resetAds(){
        setAdFrequencies( (prevFrequencies)=>{
            //set all y values back to zero, reinitialize ad histogram
            let newAdFrequencies = [...prevFrequencies];
            let rV = newAdFrequencies.map(
                (job) =>{
                    return {...job, y : 0};
                }
            )
            return rV;
        });
        setRefreshes(0);
    }
    function pickAd(value){
        setAdFrequencies( (prevFrequencies) =>{
            let newAdFrequencies = [...prevFrequencies];
            //pick an ad the designated number of times
            for (let i=0; i < value; i++){
                let prob = Math.random();
                let threshold=0;
                //randomly select ad from dataset
                for (let job of newAdFrequencies){
                    //console.log("entered" + job.x);
                    threshold += parseFloat(job.adPercentages[adDataSet]);
                    if (threshold > prob){
                        //increment its count
                        job.y++;
                        //console.log("added");
                        break; //exit once ad is selected
                    }
                    
                }
                //console.log("exited loop");
            }
            //sort adFrequencies by y value
            newAdFrequencies.sort( (a,b) => {
                return b.y - a.y;
            });
            return [...newAdFrequencies];
        });
    }
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
                        setAdFrequencies = {setAdFrequencies}
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