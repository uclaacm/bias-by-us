import React from "react";
import Question from "./Question.js";
import "./comments.css";
import "../mainContent/mainContent.css";

export default function CommentSection(props) {
  /*The mapping function below takes each element within the followups prop array and will render it as 
a corresponding question or answer*/
  let allFollowups = props.followups.filter((s, index) => index !== 0 && s.questionHeader).map((followup, index) => {
    return (
      <Question 
        key={index} 
        questionText={followup.question} 
        questionHead={followup.questionHeader}
        pic={props.followups[0]} /* passes profilePic to Question */
        numAnswers={followup.numAnswers}

        /* this is used to render answers to the question */
        followups={props.followups}
      />
    );
  });
  /* Only rendering the ones that should be visible at that current moment*/
  let visibleFollowups = allFollowups.slice(0, props.currentVisibleText);
  return (
    <div className="comments-container content-container " id={props.followups[1].question}>
      <hr className="divider" />
      {visibleFollowups}
    </div>
  );
}
