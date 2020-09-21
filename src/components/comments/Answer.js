import React from "react";

export default function Answer(props) {
  return (
    <div className="commentBubble answerBubble">
      {/* Puts the answer header and answer together within the same bubble*/}
      <div className="boldComment">{props.answerHeaderText}</div>
      <div className="comment">{props.answerText}</div>
    </div>
  );
}
