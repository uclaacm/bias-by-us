import React, {useState} from "react";
import joeBruin from "../../assets/joeBruin.png";
import "./socialMedia.css";
import "../mainContent/mainContent.css"

export default function ProfileCreator(props){
    const [genderInput, setgenderInput] = useState("unselected");
    const [raceInput, setraceInput] = useState("unselected");
    function handleGenderClick(e){
        setgenderInput(e.target.value);
    }

    function handleRaceClick(e){
        setraceInput(e.target.value);
    }

    function generateProfile() {

        if (genderInput!=="unselected" && raceInput !== "unselected"){
            props.setCurrentGender(genderInput);
            props.setCurrentRace(raceInput);
            props.setSelectedAd("default");
            props.setProfileCreated(true); 
        }        
        
    };

    function resetProfile(){
        props.setCurrentGender("unselected");
        props.setCurrentRace("unselected");
        setgenderInput("unselected");
        setraceInput("unselected");
        props.resetAds();
        props.setSelectedAd(null);
        props.setProfileCreated(false);
        
    }

    return (
        <div>
            <div className = "profile-header" id= "user-profile">Generated Profile</div>
            <div>
                <img
                    className ="user-profile-pic"
                    src={joeBruin}
                    alt="Joe Bruin, UCLA's mascot"
                />
            </div>
            <div>
                <div> Gender </div>
                <div className = "spaced-row">
                    <button
                        className = 
                            { /* conditionally render what button appears*/
                                `default-button ${genderInput === "male" ? "male-button-active" : "hover-button"} `
                            }
                        value = "male"
                        onClick = {handleGenderClick}
                    >
                        Male
                    </button>
                    <button
                        className = {`default-button ${ genderInput === "female" ? "female-button-active" : "hover-button"} ` }
                        value = "female"
                        onClick = {handleGenderClick}
                        >
                        Female
                    </button>
                </div>
            </div>
            <div>
                <div> Race </div>
                <div className = "spaced-row">
                    <button
                        className = {`default-button ${ raceInput === "white" ? "white-button-active" : "hover-button"} ` }
                        value = "white"
                        onClick = {handleRaceClick}
                    >
                        White
                    </button>
                    <button
                        className = {`default-button ${ raceInput === "black" ? "black-button-active" : "hover-button"} ` }
                        value = "black"
                        onClick = {handleRaceClick}
                    >
                        Black
                    </button>
                </div>
            </div>
                <div>
                    <button 
                        className= "default-button hover-button"
                        onClick = {generateProfile}>
                            Generate Profile
                    </button>
                </div>
                <div>
                    <button
                        className = "default-button hover-button"
                        onClick = {resetProfile}>
                        Reset Profile
                    </button>
                </div>
        </div>
    )
}