import React from "react";
import "../../AppMain.css";
import "../../index.css";
import "../posts/posts.css";

import facebookLogo from "../../assets/facebookLogo.svg";
import classifyingPic from "../../assets/classifyingPeople.svg";
import adsPic from "../../assets/personalizedAds.svg";

export default function ProgressBar(props) {

    function clickHandler(n) {
        props.setVisibleSections(n);
        props.setCurrentVisibleText(0);
        props.setForwardVisible(false);
    }

    return (
        <div className="progress-bar">
            <button className='progress-button' onClick={() => clickHandler(0)}>
                <img className='profile-pic no-margin' src={facebookLogo} alt='shortcut: intro to the case study'/>
            </button>
            <button className='progress-button' onClick={() => clickHandler(1)}>
                <img className='profile-pic no-margin' src={classifyingPic} alt='shortcut: classifying people'/>
            </button>
            <button className='progress-button' onClick={() => clickHandler(3)}>
                <img className='profile-pic no-margin' src={adsPic} alt='shortcut: stereotypes within personalized ads'/>
            </button>
            <button className='progress-button' onClick={() => clickHandler(5)}>
                don't click until section 5 is put in
            </button>
            <button className='progress-button' onClick={() => clickHandler(7)}>
                don't click until section 7 is put in
            </button>
            <button className='progress-button' onClick={() => clickHandler(9)}>
                don't click until section 9 is put in
            </button>
        </div>
    );
}
