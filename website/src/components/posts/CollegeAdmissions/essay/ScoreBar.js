import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function ScoreBar(props) {
  return (
    <div>
      The score is {props.essayScore.toFixed(2)}
      <Slider value={props.essayScore.toFixed(2)} />
    </div>
  );
}
