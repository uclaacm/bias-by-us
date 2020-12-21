import React from "react";
import "../mainContent/mainContent.css";
import "./comments.css";
export default function Answer(props) {
  return (
    <div className="single-comment-container answer">
      <img
        className="comment-profile-pic"
        src={props.pic.profilePic}
        alt="An icon that matches up with the post"
      />
      <div className="comment-bubble ">
        <div className="body-text text-bold">{props.answerHeaderText}</div>
        <div className="body-text" dangerouslySetInnerHTML={{ __html: props.answerText}}></div>
      </div>
    </div>
  );
}
