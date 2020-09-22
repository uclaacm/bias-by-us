import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
import "./comments.css";
import "../mainContent/mainContent.css";
export default function CommentSection(props) {
  return (
    /*The mapping function below takes each element within the followups prop array and will render it as 
a corresponding question or answer*/
    <div className="comments-container content-container ">
      <hr className="divider" />
      {props.followups.map((followup, index) => {
        return followup.question ? (
          <Question key={index} questionText={followup.question} />
        ) : (
          <Answer
            key={index}
            answerHeaderText={followup.answerHeader}
            answerText={followup.answer}
          />
        );
      })}
    </div>
  );
}
