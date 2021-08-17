import React from "react";

export default function ScoreBar(props) {
  return (
    <div>The score is {props.essayScore.toFixed(2)} (Will be a bar later)</div>
  );
}
