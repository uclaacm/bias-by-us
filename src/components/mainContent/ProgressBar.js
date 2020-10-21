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

    const indices = [0, 1, 3, 5, 7, 9]
    let content = props.content.filter((s, index) => indices.includes(index))
        .map((section, index) => {
            return (
                <button className='progress-button' onClick={() => clickHandler(index)}>
                    <img className={`profile-pic no-margin ${index > props.visibleSections ? "gray" : ""}`} src={section.post.profilePic} alt={`shortcut: ${section.post.header}`}/>
                </button>
            );
        });

    return (
        <div className="progress-bar">
            {content} 
        </div>
    );
}
