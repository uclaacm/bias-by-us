import React from "react";
import "../mainContent/mainContent.css";
import "./comments.css";
export default function Question(props) {
  return (
    <div className="single-comment-container">
      <img
        className="comment-profile-pic"
        src={props.pic.profilePic}
        alt="An icon that matches up with the post"
      />
      <div className="comment-bubble body-text">
        <div><b>{props.questionHead}</b></div>
        <div>{props.questionText}</div>
      </div>
    </div>
  );
}
