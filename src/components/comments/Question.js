import React, { useState } from "react";
import "../mainContent/mainContent.css";
import "./comments.css";
import Answer from "./Answer.js";
export default function Question(props) {

  /* the index of the current question inside the followups array */
  const questionIndex = props.followups.findIndex(function(item, i){
    return item.question === props.questionText;
  });

  /* keeps track of whether or not the answers are hidden*/
  const [hidden, setHidden] = useState(true); 

  const hiddenHandler = () => {
    setHidden(!hidden);
  };

  /* renders all of the answers associated with the question */
  const answerList = () => {
    let answers = props.followups.filter((s, i) => i > questionIndex && i <= questionIndex + props.numAnswers).map((a, index) => {
      console.log(questionIndex);
      return (
        <Answer
          key={index}
          answerText={a.answer}
          pic={props.followups[0]} /* passes profilePic to Answer */
        />
      );
    })

    return answers;
  };

  return (
    <div>
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
      {props.numAnswers > 0 && (
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