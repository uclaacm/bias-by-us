import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import c1 from "../matchingGameImgs/c1.svg";
import "./MatchingGame.css";

export const MatchingGame = () => {
  const GAME_WIDTH = 400;
  const GAME_HEIGHT = 500;
  const CATCHER_WIDTH = 100;
  const CATCHER_HEIGHT = 30;
  const ITEM_SIZE = 50;
  const gameAreaRef = useRef(null);
  const cupcakes = [
    { image: c1, isGood: true },
    { image: c1, isGood: false },
    { image: c1, isGood: false },
  ];

  const [currentCupcake, setCurrentCupcake] = useState(0);
  const [goodTossed, setGoodTossed] = useState(0);
  const [badCollected, setBadCollected] = useState(0);
  const [score, setScore] = useState(0);
  const [state, setState] = useState("starting"); // starting, playing, gameover

  const [catcherPosition, setCatcherPosition] = useState(
    GAME_WIDTH / 2 - CATCHER_WIDTH / 2,
  );
  const [itemY, setItemY] = useState(50);
  const [itemX, setItemX] = useState(Math.random() * (GAME_WIDTH - ITEM_SIZE));

  const start = () => {
    setState("playing");
    setCurrentCupcake(0);
    setScore(0);
    setItemY(0);
    setItemX(Math.random() * (GAME_WIDTH - ITEM_SIZE));
    // Add keydown listener
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
      gameAreaRef.current.addEventListener("keydown", handleKeyDown);
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") {
      setCatcherPosition((prev) => Math.max(0, prev - 20));
    } else if (e.key === "ArrowRight") {
      setCatcherPosition((prev) =>
        Math.min(GAME_WIDTH - CATCHER_WIDTH, prev + 20),
      );
    }
  }, []);

  const calculateFall = useCallback(
    (currentY) => {
      const newY = currentY + 5;
      if (newY > GAME_HEIGHT - ITEM_SIZE) {
        // Check for catch
        if (
          itemX + ITEM_SIZE >= catcherPosition &&
          itemX <= catcherPosition + CATCHER_WIDTH
        ) {
          processCollect();
        } else {
          processTossed();
        }
        if (currentCupcake < cupcakes.length - 1) {
          setCurrentCupcake((prev) => prev + 1);
          setItemX((prev) => Math.random() * (GAME_WIDTH - ITEM_SIZE)); // New X position
          return -20; // Reset to top
        } else {
          setState("gameover");
          return GAME_HEIGHT; // End game
        }
      }
      return Math.max(0, newY);
    },
    [
      GAME_HEIGHT,
      ITEM_SIZE,
      itemX,
      catcherPosition,
      processCollect,
      processTossed,
      GAME_WIDTH,
      cupcakes.length,
      currentCupcake,
    ],
  );

  // Game Loop
  useEffect(() => {
    if (state !== "playing") return;
    const gameLoop = setInterval(() => {
      // render falling object
      setItemY((prev) => calculateFall(prev));
    }, 20); // ~33 FPS game loop

    return () => clearInterval(gameLoop);
  }, [calculateFall]);

  function processCollect() {
    setScore(score + 10);
  }

  function processTossed() {
    setScore(score - 10);
  }

  return (
    <>
      <br></br>
      <h2>Imagine you're a cupcake inspector at a factory.</h2>
      <h3>
        Collect only the best cupcakes: no cracks, no bites, and good frosting
        shape!
      </h3>

      <p>Score: {score}</p>

      <br></br>
      <div
        className="game-area"
        ref={gameAreaRef}
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
        }}
        tabIndex={0} // Make the div focusable
      >
        {state === "starting" && (
          <>
            <button className="start-button" onClick={start}>
              Start
            </button>
          </>
        )}

        {state === "playing" && (
          <>
            <div
              className="catcher"
              style={{
                top: GAME_HEIGHT - CATCHER_HEIGHT / 2,
                left: catcherPosition,
                width: CATCHER_WIDTH,
                height: CATCHER_HEIGHT,
                padding: 0,
              }}
            />
            <img
              src={cupcakes[currentCupcake].image}
              alt="cupcake"
              className="falling-obj"
              style={{
                top: itemY,
                left: itemX,
                width: ITEM_SIZE,
                objectFit: "cover",
              }}
            />
          </>
        )}

        {state === "gameover" && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Your final score is: {score}</p>
            <button onClick={start}>Restart</button>
          </div>
        )}
      </div>

      <br></br>
    </>
  );
};
