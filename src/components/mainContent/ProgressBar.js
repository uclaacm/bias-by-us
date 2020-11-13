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
                <Link activeClass="active" to={section.post.header} spy={true} smooth={true} offset={-100} duration={500} className='progress-button'>
                    <img className={`profile-pic no-margin ${section.post.index > props.visibleSections ? "gray" : ""}`} src={section.post.profilePic} alt={`shortcut: ${section.post.header}`}/>
                </Link>
            );
        });

    return (
        <div className="progress-bar">
            {content} 
        </div>
    );
}
