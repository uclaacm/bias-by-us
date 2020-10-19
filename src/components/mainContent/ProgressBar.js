import React from "react";
import "../../AppMain.css";
import "../../index.css";
import "../posts/posts.css";
import "./mainContent.css";

export default function ProgressBar(props) {

    function clickHandler(n) {
        props.setVisibleSections(n);
        props.setCurrentVisibleText(0);
        props.setForwardVisible(false);
    }

    const indicies = [0, 1, 3, 5, 7, 9]
    let content = props.content
        .map((section, index) => {
            if (indicies.includes(index)) {
                return (
                    <button className='progress-button' onClick={() => clickHandler(index)}>
                        <img className={`profile-pic no-margin ${index > props.visibleSections ? "gray" : ""}`} src={section.post.profilePic} alt={`shortcut: ${section.post.header}`}/>
                    </button>
                );
            } else {
                return ""; // added because of npm run build warning about a missing return
            }
        });

    return (
        <div className="progress-bar">
            {content} 
        </div>
    );
}
