import React from "react";
import { useState } from "react";
import "./MatchingGame.css";
import placeholderThumbnail from "../placeholderThumbnail.png";

export const MatchingGame = () => {
  const [score, setScore] = useState(0);

  function processGroup1Click() {
    setScore(score + 10);
  }

  function processGroup2Click() {
    setScore(score - 5);
    console.log(score);
  }

  return (
    <>
      <br></br>
      <h1>Let's play a game!</h1>

      <p>Score: {score}</p>

      <img src={placeholderThumbnail} width={250} height={250} alt="game"></img>
      <br></br>
      <button onClick={processGroup1Click}>Group 1</button>

      <button onClick={processGroup2Click}>Group 2</button>

      <br></br>
    </>
  );
};
