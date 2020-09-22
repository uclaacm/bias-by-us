import React from "react";

export default function Question(props) {
  return (
    <div className="question comment-bubble body-text text-bold">
      {props.questionText}
    </div>
  );
}
