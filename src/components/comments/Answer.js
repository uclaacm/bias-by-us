import React from "react";
import "../mainContent/mainContent.css";
export default function Answer(props) {
  return (
    <div className="answer-bubble comment-bubble ">
      {/* Puts the answer header and answer together within the same bubble
      I think having either only answerText or answerHeaderText for Answer components 
      can make it so that our answers can have just bold text or just unbolded text, what 
      issues can we run into down the line using this approach?*/}
      <div className="body-text text-bold">{props.answerHeaderText}</div>
      <div className="body-text">{props.answerText}</div>
    </div>
  );
}
