import { StarIcon } from "@phosphor-icons/react";
import React, { useState } from "react";
import "./CategorizationGame.css";

function CategorizationGame() {
  const [gameCompleted, setGameCompleted] = useState(false);
  // Note: the image paths are hardcoded in due to no backend; if the img files are moved from public, the start of each string must also be modified to reflect the path
  const foodPictures = [
    "./categorizationGameImgs/Ndole.jpg",
    "./categorizationGameImgs/buuz.jpg",
    "./categorizationGameImgs/cachupa.jpg",
    "./categorizationGameImgs/ceviche.jpg",
    "./categorizationGameImgs/halusky.jpg",
    "./categorizationGameImgs/hamburger.jpg",
    "./categorizationGameImgs/jambalaya.jpg",
    "./categorizationGameImgs/karekare.png",
    "./categorizationGameImgs/mapoDoufu.jpg",
    "./categorizationGameImgs/mole.png",
    "./categorizationGameImgs/mussakhan.webp",
    "./categorizationGameImgs/nihari.jpg",
    "./categorizationGameImgs/padThai.jpg",
    "./categorizationGameImgs/paellaValenciana.jpg",
    "./categorizationGameImgs/pepperPot.jpg",
    "./categorizationGameImgs/platoTipico.jpg",
    "./categorizationGameImgs/poke.jpg",
    "./categorizationGameImgs/raguAllaBolognese.jpg",
    "./categorizationGameImgs/ramen.webp",
    "./categorizationGameImgs/sadza.webp",
    "./categorizationGameImgs/sarmale.jpg",
    "./categorizationGameImgs/tacos.jpg",
    "./categorizationGameImgs/texasBBQ.jpg",
    "./categorizationGameImgs/warakEnab.jpg",
    "./categorizationGameImgs/zigni.jpg",
  ];
  const [familarRatingSum, setFamiliarRatingSum] = useState(0);
  const [unfamilarRatingSum, setUnfamiliarRatingSum] = useState(0);
  const [familiarCount, setFamiliarCount] = useState(0);
  const [unfamiliarCount, setUnfamiliarCount] = useState(0);
  const [currentRating, setCurrentRating] = useState(null);
  const [yes, setYes] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const next = () => {
    if (gameCompleted) {
      return;
    }
    setErrorMessage("");
    if (yes == null) {
      setErrorMessage("Please select yes or no before continuing.");
      return;
    }
    if (currentRating == null) {
      setErrorMessage("Please select a rating before continuing.");
      return;
    }
    if (yes) {
      setFamiliarRatingSum(familarRatingSum + currentRating);
      setFamiliarCount(familiarCount + 1);
    } else {
      setUnfamiliarRatingSum(unfamilarRatingSum + currentRating);
      setUnfamiliarCount(unfamiliarCount + 1);
    }
    if (currentIndex + 1 >= foodPictures.length) {
      setCurrentIndex(currentIndex + 1);
      setGameCompleted(true);
      return;
    }
    setYes(null);
    setCurrentRating(null);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <p className="instructions">
        Imagine you're a famous food critic on a cooking competition. Without
        considering plating or fanciness, rate each dish based on how appetizing
        it looks and be critical! We only want the best dishes to win!
      </p>
      <br />
      <p>
        {currentIndex}/{foodPictures.length}
      </p>
      <img
        src={
          gameCompleted
            ? foodPictures[foodPictures.length - 1]
            : foodPictures[currentIndex]
        }
        alt="Food Item"
        className="food-img"
      />
      <div className="interactive-section">
        {gameCompleted ? (
          <>
            <h2>Game Completed!</h2>
            <h4>Important Notes:</h4>
            <p>
              {" "}
              There are so many factors that might influence ratings besides
              familiarity. We tried to limit these by choosing photos with
              saturated colors and nice plating. We wanted you to have a split
              between familiar and unfamiliar foods, so we chose some commonly
              eaten dishes in the US as well as random countries' national or
              popular dishes. As humans, we all have a little bias, and it was
              tricky finding pictures that really represent a dish when you
              haven't eaten it. If there's a dish you recognize with a picture
              that can be improved, let us know!
            </p>
          </>
        ) : (
          <>
            <p className="instructions">
              Have you eaten this food or something very similar before?
            </p>
            <br />
            <button
              className={yes === true ? "selected" : "not-selected"}
              onClick={() => {
                setYes(true);
              }}
            >
              Yes
            </button>
            <button
              className={yes === false ? "selected" : "not-selected"}
              onClick={() => {
                setYes(false);
              }}
            >
              No
            </button>
          </>
        )}
        <br />
        <div className="rating">
          <StarIcon
            onClick={() => {
              setCurrentRating(1);
            }}
            size={70}
            weight={currentRating >= 1 ? "fill" : "bold"}
            color="#fcbe03"
          />
          <StarIcon
            onClick={() => {
              setCurrentRating(2);
            }}
            size={70}
            weight={currentRating >= 2 ? "fill" : "bold"}
            color="#fcbe03"
          />
          <StarIcon
            onClick={() => {
              setCurrentRating(3);
            }}
            size={70}
            weight={currentRating >= 3 ? "fill" : "bold"}
            color="#fcbe03"
          />
          <StarIcon
            onClick={() => {
              setCurrentRating(4);
            }}
            size={70}
            weight={currentRating >= 4 ? "fill" : "bold"}
            color="#fcbe03"
          />
          <StarIcon
            onClick={() => {
              setCurrentRating(5);
            }}
            size={70}
            weight={currentRating >= 5 ? "fill" : "bold"}
            color="#fcbe03"
          />
        </div>
        {!gameCompleted && (
          <button className="next-button" onClick={next}>
            Next
          </button>
        )}
        <br />
        <p className="error-message">{errorMessage}</p>
      </div>
      {gameCompleted && (
        <>
          <h2>Results:</h2>
          <h4 className="rating-result">
            Average rating for familiar foods:{" "}
            <span>
              {familiarCount > 0
                ? (familarRatingSum / familiarCount).toFixed(4)
                : "no data avaliable"}
            </span>
          </h4>
          <h4 className="rating-result">
            Average rating for unfamiliar foods:{" "}
            <span>
              {unfamiliarCount > 0
                ? (unfamilarRatingSum / unfamiliarCount).toFixed(4)
                : "no data avaliable"}
            </span>
          </h4>
          <h4>Takeaways:</h4>
          <p>
            Is there any difference between your ratings for familiar and
            unfamiliar foods?
          </p>
          <p>
            Was it harder to imagine what unfamiliar foods might taste like,
            especially if you couldn't recognize the ingredients?
          </p>
        </>
      )}
    </div>
  );
}

export default CategorizationGame;
