import React from "react";
import "./essay.css";

export default function ScoreBar(props) {
  const scale = 2;
  const shift = 0;
  let scaledScore = props.essayScore * scale + shift;
  scaledScore = scaledScore < 0 ? 0 : scaledScore > 100 ? 100 : scaledScore;

  return (
    <div class="score-bar">
      <div class="score-bar-circle" style={{ left: scaledScore + "%" }}></div>
    </div>
  );
}
