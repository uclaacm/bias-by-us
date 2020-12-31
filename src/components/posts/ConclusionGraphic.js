import React, { useState } from "react";
import "./conclusion.css";
import conclusion from "../../assets/conclusion.js";
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
          <button className={`card-button ${currentCard === 0 ? "gray" : ""}`} aria-label="Previous Solution"onClick={previousCard}>
              <div className="card-arrow back"></div>
          </button>
          <button className={`card-button ${currentCard === conclusion.length-1 ? "gray" : ""}`} aria-label="Next Solution"onClick={nextCard}>
              <div className="card-arrow"></div>
          </button>
        </div>
    );
  }

  let currentSection = conclusion[currentCard];

  let content = 
    <div className="card">
      <h4 className="card-header">{currentSection.card.head}</h4>
      <img className="card-image" alt={currentSection.card.alt} src={currentSection.card.pic}></img>
      <div>{currentSection.card.content}</div>
      {buttons()}
    </div>

  return (
    <div className="horizontal">
      {content}
    </div>
  );
}
