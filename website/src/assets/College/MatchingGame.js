import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import g1 from "../matchingGameImgs/g1.svg";
import g2 from "../matchingGameImgs/g2.svg";
import g3 from "../matchingGameImgs/g3.svg";
import g4 from "../matchingGameImgs/g4.svg";
import g5 from "../matchingGameImgs/g5.svg";
import g6 from "../matchingGameImgs/g6.svg";
import b1 from "../matchingGameImgs/b1.svg";
import b2 from "../matchingGameImgs/b2.svg";
import b3 from "../matchingGameImgs/b3.svg";
import b4 from "../matchingGameImgs/b4.svg";
import b5 from "../matchingGameImgs/b5.svg";
import b6 from "../matchingGameImgs/b6.svg";
import b7 from "../matchingGameImgs/b7.svg";
import b8 from "../matchingGameImgs/b8.svg";
import b9 from "../matchingGameImgs/b9.svg";
import b11 from "../matchingGameImgs/b11.svg";
import b12 from "../matchingGameImgs/b12.svg";
import banner from "../banner.svg";
import basket from "../basket.svg";
import trashcan from "../trashcan.svg";

import "./MatchingGame.css";

export const MatchingGame = () => {
  const GAME_WIDTH = 400;
  const GAME_HEIGHT = 500;
  const CATCHER_WIDTH = 100;
  const CATCHER_HEIGHT = 45;
  const ITEM_SIZE = 50;

  const gameAreaRef = useRef(null);
  const cupcakeIndexRef = useRef(0);
  const collisionRef = useRef(false);
  const cupcakesRef = useRef([]);
  const isCollectedRef = useRef(false);

  const scoreRef = useRef(0);
  const goodTossedRef = useRef(0);
  const goodTossedUnsimilarRef = useRef(0);
  const badCollectedRef = useRef(0);
  const badCollectedSimilarRef = useRef(0);

  const tossedRef = useRef([]);
  const collectedRef = useRef([]);

  const trainingCupcakes = [
    { image: g1, isGood: true, isColorful: false }, // first 5 cupcakes are for training
    { image: b2, isGood: false, isColorful: false },
    { image: g1, isGood: true, isColorful: false },
    { image: b3, isGood: false, isColorful: false },
    { image: g1, isGood: true, isColorful: false },
  ];
  let cupcakeCatalog = [
    { image: g1, isGood: true, isColorful: false },
    { image: g1, isGood: true, isColorful: false },
    { image: g1, isGood: true, isColorful: false },
    { image: g1, isGood: true, isColorful: false },
    { image: g1, isGood: true, isColorful: false },
    { image: g2, isGood: true, isColorful: true },
    { image: g3, isGood: true, isColorful: true },
    { image: g4, isGood: true, isColorful: true },
    { image: g5, isGood: true, isColorful: true },
    { image: g6, isGood: true, isColorful: true },
    { image: b1, isGood: false, isColorful: false },
    { image: b1, isGood: false, isColorful: false },
    { image: b2, isGood: false, isColorful: false },
    { image: b3, isGood: false, isColorful: false },
    { image: b3, isGood: false, isColorful: false },
    { image: b6, isGood: false, isColorful: false },
    { image: b6, isGood: false, isColorful: false },
    { image: b4, isGood: false, isColorful: true },
    { image: b5, isGood: false, isColorful: true },
    { image: b7, isGood: false, isColorful: true },
    { image: b8, isGood: false, isColorful: true },
    { image: b9, isGood: false, isColorful: true },
    { image: b11, isGood: false, isColorful: true },
    { image: b12, isGood: false, isColorful: true },
  ];

  const [state, setState] = useState("starting"); // starting, playing, gameover
  const [speed, setSpeed] = useState(40);

  const [itemY, setItemY] = useState(50);
  const [itemX, setItemX] = useState(50);
  const [catcherPosition, setCatcherPosition] = useState(
    GAME_WIDTH / 2 - CATCHER_WIDTH / 2,
  );

  function shuffle(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const start = () => {
    shuffle(cupcakeCatalog);
    cupcakesRef.current = [...trainingCupcakes, ...cupcakeCatalog];
    setState("playing");
    cupcakeIndexRef.current = 0;
    setSpeed(40);
    setItemY(0);
    setItemX(Math.random() * (GAME_WIDTH - ITEM_SIZE));

    isCollectedRef.current = false;
    collisionRef.current = false;

    scoreRef.current = 0;
    goodTossedRef.current = 0;
    goodTossedUnsimilarRef.current = 0;
    badCollectedRef.current = 0;
    badCollectedSimilarRef.current = 0;

    tossedRef.current = [];
    collectedRef.current = [];

    setCatcherPosition(GAME_WIDTH / 2 - CATCHER_WIDTH / 2);

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

      if (newY >= GAME_HEIGHT - ITEM_SIZE) {
        collisionRef.current = true;

        const idx = cupcakeIndexRef.current;
        if (
          itemX + ITEM_SIZE >= catcherPosition &&
          itemX <= catcherPosition + CATCHER_WIDTH
        ) {
          isCollectedRef.current = true;
        }

        if (idx === 4) {
          setSpeed(20); // Increase speed after training 5 cupcakes
        }
        setItemX(Math.random() * (GAME_WIDTH - ITEM_SIZE));
        return -20; // Reset to top
      }
      return Math.min(GAME_HEIGHT, newY);
    },
    [GAME_HEIGHT, ITEM_SIZE, catcherPosition, itemX],
  );

  // Game Loop
  useEffect(() => {
    if (state !== "playing") return;
    const gameLoop = setInterval(() => {
      // render falling object
      setItemY((prev) => calculateFall(prev));

      if (collisionRef.current === true) {
        // relocate incrementation outside of setItemY to avoid double increment due to strict mode
        // Check for catch
        const idx = cupcakeIndexRef.current;
        const currentCupcake = cupcakesRef.current[idx];
        // Scoring: TODO: refactor if-else ladder to increase readability
        // if it's collected, only record score and stats after the 5 training cupcakes
        if (isCollectedRef.current) {
          console.log("collected");
          if (idx < 5) {
            collectedRef.current.push(currentCupcake);
          } else {
            if (currentCupcake.isGood) {
              scoreRef.current = scoreRef.current + 1;
            } else {
              badCollectedRef.current = badCollectedRef.current + 1;
              if (!currentCupcake.isColorful) {
                badCollectedSimilarRef.current =
                  badCollectedSimilarRef.current + 1;
              }
            }
          }
        } else {
          if (idx < 5) {
            tossedRef.current.push(currentCupcake);
          } else {
            if (!currentCupcake.isGood) {
              scoreRef.current = scoreRef.current + 1;
            } else {
              goodTossedRef.current = goodTossedRef.current + 1;
              if (currentCupcake.isColorful) {
                goodTossedUnsimilarRef.current =
                  goodTossedUnsimilarRef.current + 1;
              }
            }
          }
        }
        isCollectedRef.current = false;
        if (idx >= cupcakesRef.current.length - 1) {
          setState("gameover");
        }
        cupcakeIndexRef.current = idx + 1; // Update the Ref
        collisionRef.current = false;
      }
    }, speed); // as this increases, the falling speed decreases

    return () => clearInterval(gameLoop);
  }, [calculateFall, speed, state, catcherPosition]);

  return (
    <>
      <br></br>
      <h3>
        {" "}
        Imagine you're a cupcake inspector at a factory. Collect only the best
        cupcakes: no cracks, no bites, and good frosting shape!{" "}
      </h3>

      <br></br>
      <img src={banner} alt="cupcake examples" className="banner-img" />
      <div className="game-container">
        <div className="image-container">
          {collectedRef &&
            collectedRef.current.map((cupcake, index) => {
              return (
                <>
                  <h6 className="training-comment">
                    {!cupcake.isGood ? "incorrect" : <span>correct</span>}
                  </h6>
                  <img
                    className="cupcake"
                    key={index}
                    src={cupcake.image}
                    alt="collected cupcake"
                  />
                </>
              );
            })}
          <img className="cupcake" src={basket} alt="collection basket" />
        </div>

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
              <h4 className="instructions">
                Use the arrow keys to collect the good cupcakes. The first 5
                cupcakes are for training and won't be scored. Ready?
              </h4>
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
                src={cupcakesRef.current[cupcakeIndexRef.current].image}
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
            <div className="game-window">
              <h2>Game Over!</h2>
              <h5>Your final score is: {scoreRef.current}/24</h5>
              <p className="result-category">
                Out of the <span>good</span> cupcakes wrongfully{" "}
                <span>tossed</span>, what percent <span>did NOT</span> look like
                the training examples?{" "}
              </p>
              <h6 className="result">
                {goodTossedRef.current > 0
                  ? (
                      (goodTossedUnsimilarRef.current * 100) /
                      goodTossedRef.current
                    ).toFixed(2) + "%"
                  : "None were wrongfully tossed!"}
              </h6>
              <p className="result-category">
                Out of the <span>bad</span> cupcakes wrongfully{" "}
                <span>collected</span>, what percent <span>did</span> look like
                the training examples?{" "}
              </p>
              <h6 className="result">
                {badCollectedRef.current > 0
                  ? (
                      (badCollectedSimilarRef.current * 100) /
                      badCollectedRef.current
                    ).toFixed(2) + "%"
                  : "None were wrongfully collected!"}
              </h6>
              <p className="footnote">
                * there are equal amounts of similar looking and not similar
                looking cupcakes
              </p>
              <br />
              <button className="restart-button" onClick={start}>
                Restart
              </button>
            </div>
          )}
        </div>

        <div className="image-container">
          {tossedRef &&
            tossedRef.current.map((cupcake, index) => {
              return (
                <>
                  <h6 className="training-comment">
                    {cupcake.isGood ? "incorrect" : <span>correct</span>}
                  </h6>
                  <img
                    className="cupcake"
                    key={index}
                    src={cupcake.image}
                    alt="tossed cupcake"
                  />
                </>
              );
            })}
          <img className="cupcake" src={trashcan} alt="cupcake trash can" />
        </div>
      </div>

      <br></br>
    </>
  );
};
