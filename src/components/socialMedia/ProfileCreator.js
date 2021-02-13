import React, {useState} from "react";
import joeBruin from "../../assets/joeBruin.png";
import "./socialMedia.css";
import "../mainContent/mainContent.css"

export default function ProfileCreator(props){
    const [currentGender, setCurrentGender] = useState("unselected");
    const [currentRace, setCurrentRace] = useState("unselected");
    function handleGenderClick(e){
        setCurrentGender(e.target.value);
    }

    function handleRaceClick(e){
        setCurrentRace(e.target.value);
    }

    function generateProfile() {

        if (currentGender!="unselected" && currentRace != "unselected"){
            props.setGenderInput(currentGender);
            props.setRaceInput(currentRace);
            props.setProfileCreated(true);
        }        
        
    };

    function resetProfile(){
        props.setGenderInput("unselected");
        props.setRaceInput("unselected");
        setCurrentGender("unselected");
        setCurrentRace("unselected");
        props.setRefreshes(0);
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
                Gender
                <div className = "spaced-row">
                    <button
                    className = {
                        currentGender === "male"
                        ? "default-button male-button-active"
                        : "default-button hover-button"
                    }
                    value = "male"
                    onClick = {handleGenderClick}
                    >
                        Male
                    </button>

                    <button
                    className = {
                        currentGender === "female"
                        ? "default-button female-button-active"
                        : "default-button hover-button"
                    }
                    value = "female"
                    onClick = {handleGenderClick}
                    >
                        Female
                    </button>
                </div>
            </div>

            <div>
                Race
                <div className = "spaced-row">
                    <button
                    className = {
                        currentRace === "white"
                        ? "default-button white-button-active"
                        : "default-button hover-button"
                    }
                    value = "white"
                    onClick = {handleRaceClick}
                    >
                        White
                    </button>

                    <button
                    className = {
                        currentRace === "black"
                        ? "default-button black-button-active"
                        : "default-button hover-button"
                    }
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