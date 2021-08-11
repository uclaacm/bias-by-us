import React, { useState } from "react";
import "../mainContent/mainContent.css";
import "./comments.css";
import Answer from "./Answer.js";
export default function Question(props) {
  /* keeps track of whether or not the answers are hidden*/
  const [hidden, setHidden] = useState(true);

  const hiddenHandler = () => {
    setHidden(!hidden);
  };

  /* renders all of the answers associated with the question */
  const answerList = () =>
    props.answerList.map((answer, index) => {
      return (
        <Answer
          key={index}
          answerText={answer}
          profilePic={props.profilePic}
          profilePicName={props.profilePicName}
        />
      );
    });

  return (
    <div>
      <div className="single-comment-container">
        <img
          className="comment-profile-pic"
          src={props.profilePic}
          alt={props.profilePicName}
        />
        <div className="comment-bubble body-text">
          <div className="text-bold">{props.questionHead}</div>
          <div>{props.questionText}</div>
        </div>
      </div>
      {props.answerList.length > 0 && (
        <div>
          <button className="show-answer" onClick={hiddenHandler}>
            {hidden ? "Show Answer" : "Hide Answer"}
          </button>
          {!hidden && answerList()}
        </div>
      )}
    </div>
  );
}
