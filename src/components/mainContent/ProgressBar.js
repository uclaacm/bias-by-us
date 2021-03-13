import React from "react";
import "../../AppMain.css";
import "../../index.css";
import "../posts/posts.css";
import "./mainContent.css";
import {Link} from "react-scroll";

export default function ProgressBar(props) {

    const indices = [0, 1, 3, 5, 7, 9];
    let content = props.content.filter((s, index) => indices.includes(index))
        .map((section, index) => {
            return (
                /* scrollTo configuration options:
                   - smooth: animates the scrolling with smooth movement
                   - offset: scroll additional px (like padding), so that we can see the content under the navbar
                   - duration: total duration of the scroll animation
                */
                <Link activeClass="active" to={section.post.header} smooth={true} offset={-100} duration={500} className='progress-button' key ={index} aria-label={`move to ${section.post.header}`}>
                    <img className={`profile-pic no-margin static-size ${props.content.indexOf(section) > props.visibleSections ? "gray" : ""}`} src={section.post.profilePic} alt={`the icon for the "${section.post.header}" section`}/>
                </Link>
            );
        });

    return (
        <div className="progress-bar">
            {content} 
        </div>
    );
}
