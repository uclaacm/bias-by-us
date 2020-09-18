import React from "react";

export default function Answer(props) {
  return (
    <div className="commentBubble answerBubble">
      <div className="boldComment">{props.answerHeaderText}</div>
      <div className="comment">{props.answerText}</div>
    </div>
  );
}
