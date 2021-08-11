import React from "react";
import "../mainContent/mainContent.css";
import "./comments.css";
export default function Answer(props) {
  return (
    <div className="single-comment-container answer">
      <img
        className="answer-profile-pic"
        src={props.profilePic}
        alt={props.profilePicName}
      />
      <div className="comment-bubble">
        <div className="body-text">{props.answerText}</div>
      </div>
    </div>
  );
}
