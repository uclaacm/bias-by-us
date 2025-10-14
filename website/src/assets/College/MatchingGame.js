import React from "react";
import { useState, useEffect } from "react";
import "./MatchingGame.css";
import placeholderThumbnail from "../placeholderThumbnail.png";
import num1 from "../one.jpg"; // 1.avif
import num2 from "../two.jpg"; // 2.avif

export const MatchingGame = () => {
  const [score, setScore] = useState(0);
  const [displayNum, setDisplayNum] = useState(8);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [curImg, setCurImg] = useState(placeholderThumbnail);
  const [numAnswered, setNumAnswered] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  function processGroup1Click() {
    if (displayNum == 1) {
      setScore(score + 1);
      setNumCorrect(numCorrect + 1);
    }
    setNumAnswered(numAnswered + 1);
    // generate a new number when group 1 is clicked
    generateNumber();
  }

  function processGroup2Click() {
    if (displayNum == 2) {
      setScore(score + 1);
      setNumCorrect(numCorrect + 1);
    }
    setNumAnswered(numAnswered + 1);
    // generate a new number when group 2 is clicked
    generateNumber();
  }

  function startGame() {
    setGameStarted(true);
    // set 1 minute timer
    setTimeLeft(60);
    // generate the first number
    generateNumber();
    // reset numAnswered + numCorrect
  }

  function generateNumber() {
    // on click generate a random number {1, 2}
    const randNum = Math.random() < 0.5 ? 1 : 2;
    // generate image to display number
    if (randNum == 1) {
      setCurImg(num1);
    } else if (randNum == 2) {
      setCurImg(num2);
    }
    setDisplayNum(randNum);
  }

  function reset() {
    setGameStarted(false);
    setNumAnswered(0);
    setNumCorrect(0);
    setTimeLeft(60);
    setAccuracy(0);
    setScore(0);
  }

  useEffect(() => {
    if (!gameStarted || timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          setGameStarted(false);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [gameStarted, timeLeft]);

  function endGame() {
    // display accuracy [(numCorrect/numAnswered * 100)%]
    setAccuracy((numCorrect / numAnswered) * 100);
  }

  return (
    <>
      <br></br>
      <h1>Let's play a game!</h1>

      <p>Score: {score}</p>

      <p>Time Left: {timeLeft}</p>

      <p>Accuracy: {Math.floor(accuracy) + "%"}</p>

      <img src={curImg} width={250} height={250} alt="game"></img>

      <br></br>
      <button onClick={processGroup1Click}>Group 1</button>

      <button onClick={processGroup2Click}>Group 2</button>

      <button onClick={startGame}>Start</button>

      <button onClick={reset}>Reset</button>

      <br></br>
    </>
  );
};
