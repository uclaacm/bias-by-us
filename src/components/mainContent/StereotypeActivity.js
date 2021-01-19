import React, { useState } from "react";
import CrossfadeImage from "react-crossfade-image";
import "./stereotype.css";
import curveGray from "../../assets/curve-gray.png";
import curveColored from "../../assets/curve-colored.png";
import stereotypeData from "../../assets/stereotypeData.js";
import restartButton from "../../assets/restartButton.png";


export default function ConclusionGraphic() {

    const [finished, setFinished] = useState(false);

    // switches the activity's state
    const finishedHandler = () => {
        if (finished) {
            // changes activity back to its default state
            setSelectedPeople([false,false,false,false,false,false]);
            setCurrentPerson(-1); // -1 represents "no person"
            setSelectedJobs([-1,-1,-1,-1,-1,-1]);
        }
        setFinished(!finished);
    }

    // each index represents a Person. If true, that person has been matched to a job.
    const [selectedPeople, setSelectedPeople] = useState([false,false,false,false,false,false]);

    // updates selectedPeople list after a person is matched to a job
    function selectedPeopleHandler(num) {
        let newList = selectedPeople;
        newList[num] = true;
        setSelectedPeople(newList);
    }

    // tracks the current person who is toggled
    const [currentPerson, setCurrentPerson] = useState(-1);

    // updates currentPerson after a person is toggled
    function currentPersonHandler(num) {
        if (currentPerson === num) {
            setCurrentPerson(-1); // -1 represents "no person"
        } else {
            setCurrentPerson(num);
        }
    }
    
    // tracks which person is matched to which job. The index of the list corresponds to the job, and the value represents the person. For example, if the person with index 2 was matched to the job with index 0, then the value at index 0 of the list is 2. 
    const [selectedJobs, setSelectedJobs] = useState([-1,-1,-1,-1,-1,-1]); // -1 represents "no person"

    // updates selectedJobs
    function selectedJobsHandler(num) {
        if (currentPerson >= 0) { // if a person is currently toggled
            let newList = selectedJobs;
            newList[num] = currentPerson;
            setSelectedJobs(newList);
            selectedPeopleHandler(currentPerson);
            setCurrentPerson(-1);
            if (selectedPeople.every(Boolean))
                finishedHandler();
        }
    }

    // Job component
    function Job(props) {
        let person = stereotypeData[1][selectedJobs[props.index]];
        return (
            <div className="job" style={{top: props.top, left: props.left}}>
                <p className='label'>{props.label}</p>
                {
                    selectedJobs[props.index] === -1 ? 
                    (<svg width="112" height="113" viewBox="0 0 112 113" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
                        <ellipse cx="56" cy="56.5" rx="56" ry="56.5" fill="#C4C4C4" onClick={() => selectedJobsHandler(props.index)}/>
                    </svg>) :
                    (<img alt={person.alt} className="person" src={person.src} />) 
                    // not a Person object so that it won't have the additional styling needed for people who haven't been matched yet
                }
            </div>
        );
    }

    // maps jobs, each as a Job component
    let jobs = stereotypeData[0].map((job) => {
        return (
            <Job label={job.label} top={job.top} left={job.left} index={job.index} />
        );
    });

    // Person component
    function Person(props) {
        return (
            <img onClick={()=> currentPersonHandler(props.index)} alt={props.alt} className="person circle-shadow" src={props.src} style={{top: props.top, left: props.left, visibility: selectedPeople[props.index] ? 'hidden' : 'visible' , border: currentPerson === props.index ? '3px solid black' : ''}}/>
        );
    }

    // maps people, each as a Person component
    let people = stereotypeData[1].map((person) => {
        return (
            <Person alt={person.alt} src={person.src} top={person.top} left={person.left} index={person.index}/>
        );
    });

    // appears when the activity is at "finished" state
    const ending = () => {
        return (
            <div>
                <p className="stereotype-message">These are the genders that are stereotypically associated with each occupation. How close to these stereotypes were your predictions?</p>
                <button aria-label="click to restart" className="stereotype-refresh-button" onClick={finishedHandler}><img src={restartButton}/></button>
            </div>
        );
    }

    return (
        <div className="stereotype-container">
            <h4>Here are 6 people. Try matching them to the occupation they might have!</h4>
            <div className="row-flex">
                {jobs}
            </div>
            <CrossfadeImage containerClass="curve" src={finished ? curveColored : curveGray} alt={finished ? "gray curve" : "curve with gradient from pink to blue, with gender labels female and male"} />
            {people}
            {finished && ending()}
        </div>
    );
}
