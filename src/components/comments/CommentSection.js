import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
import "./comments.css";
export default function CommentSection(props) {
  let followupSection = props.followups.map((followup) => {
    if (followup.question != null)
      return <Question questionText={followup.question} />;
    if (followup.answer != null || followup.answerHeader != null)
      return (
        <Answer
          answerHeaderText={followup.answerHeader}
          answerText={followup.answer}
        />
      );
    return "";
  });

  return (
    <div className="commentsContainer">
      <hr className="divider"></hr>
      {followupSection}
    </div>
  );
}
