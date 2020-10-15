import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
import "./comments.css";
import "../mainContent/mainContent.css";
export default function CommentSection(props) {
  /*The mapping function below takes each element within the followups prop array and will render it as 
a corresponding question or answer*/
  let allFollowups = props.followups.map((followup, index) => {
    return followup.question ? (
      <Question key={index} questionText={followup.question} />
    ) : (
      <Answer
        key={index}
        answerHeaderText={followup.answerHeader}
        answerText={followup.answer}
      />
    );
  });
  /* Only rendering the ones that should be visible at that current moment*/
  let visibleFollowups = allFollowups.slice(0, props.currentVisibleText);
  return (
    <div className="comments-container content-container ">
      
      {visibleFollowups}
    </div>
  );
}
