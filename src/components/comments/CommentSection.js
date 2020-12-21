import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
import "./comments.css";
import "../mainContent/mainContent.css";

export default function CommentSection(props) {
  const profilePic = props.followups[0];
  /*The mapping function below takes each element within the followups prop array and will render it as 
a corresponding question or answer*/
  let allFollowups = props.followups.filter((s, index) => index !== 0).map((followup, index) => {
    return followup.questionHeader ? (
      <Question 
        key={index} 
        questionText={followup.question} 
        questionHead={followup.questionHeader}
        pic={profilePic}
      />
    ) : (
      <Answer
        key={index}
        answerText={followup.answer}
        pic={profilePic}
      />
    );
  });
  /* Only rendering the ones that should be visible at that current moment*/
  let visibleFollowups = allFollowups.slice(0, props.currentVisibleText);
  return (
    <div className="comments-container content-container " id={props.followups[0].question}>
      <hr className="divider" />
      {visibleFollowups}
    </div>
  );
}
