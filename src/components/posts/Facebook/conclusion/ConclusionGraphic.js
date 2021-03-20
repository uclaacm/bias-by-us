import React, { useState } from "react";
import "./conclusion.css";
import conclusion from "./conclusion.js";
export default function ConclusionGraphic() {

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    if (currentCard + 1 < conclusion.length)
      setCurrentCard(currentCard + 1);
  }

  const previousCard = () => {
    if (currentCard - 1 >= 0)
    setCurrentCard(currentCard - 1);
  }

  let buttons = () => {
    return (
        <div className="horizontal">
          <button disabled={currentCard === 0} className={`card-button ${currentCard === 0 ? "gray" : ""}`} aria-label="Previous Solution"onClick={previousCard}>
              <div className="card-arrow back"></div>
          </button>
          <button disabled={currentCard === conclusion.length-1} className={`card-button ${currentCard === conclusion.length-1 ? "gray" : ""}`} aria-label="Next Solution"onClick={nextCard}>
              <div className="card-arrow"></div>
          </button>
        </div>
    );
  }

  function ConclusionCard(props){
    return (
      <div className="card">
        <h4 className="no-margin">{props.card.head}</h4>
        <img className="card-image" alt={props.card.alt} src={props.card.pic}></img>
        <div>{props.card.content}</div>
        {buttons()}
      </div>
    );
  }

  let currentSection = conclusion[currentCard];

  return (
    <div className="horizontal">
      <ConclusionCard card={currentSection.card} />
    </div>
  );
}
