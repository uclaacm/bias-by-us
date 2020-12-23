import React from "react";
import Question from "./Question.js";
import "./comments.css";
import "../mainContent/mainContent.css";

export default function CommentSection(props) {
  /*The mapping function below takes each element within the followups prop array and will render it as 
a corresponding question or answer*/
  let allFollowups = props.commentSection.followups.map((followup, index) => {
    return (
      <Question 
        key={index} 
        questionText={followup.question} 
        questionHead={followup.questionHeader}
        profilePic={props.commentSection.profilePic}
        profilePicName={props.commentSection.profilePicName}
        answerList={followup.answers}
      />
    );
  });
  /* Only rendering the ones that should be visible at that current moment*/
  let visibleFollowups = allFollowups.slice(0, props.currentVisibleText);
  return (
    <div className="comments-container content-container " id={props.address}>
      <hr className="divider" />
      {visibleFollowups}
    </div>
  );
}
