import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
import "./comments.css";
export default function CommentSection(props) {
  let followupSection = [];
  props.followups.forEach((followup) => {
    if (followup.question != null) {
      followupSection.push(<Question questionText={followup.question} />);
    }
    if (followup.answer != null || followup.answerHeader != null) {
      followupSection.push(
        <Answer
          answerHeaderText={followup.answerHeader}
          answerText={followup.answer}
        />
      );
    }
  });

  return (
    <div className="commentsContainer">
      <hr className="divider"></hr>
      {followupSection}
    </div>
  );
}
