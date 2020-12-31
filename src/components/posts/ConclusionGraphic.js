import React, { useState } from "react";
import "./conclusion.css";
import conclusion from "../../assets/conclusion.js";
export default function ConclusionGraphic() {

  const [currentCard, setCurrentCard] = useState(0);

  const currentCardHandler = (dir) => {
    if (dir === "back")
        setCurrentCard(currentCard-1);
    else if (dir === "forward")
        setCurrentCard(currentCard+1);
  };

  let buttons = () => {
    return (
        <div className="horizontal">
            {currentCard > 0 && (
                <button className="card-button" aria-label="Previous Solution"onClick={()=>currentCardHandler("back")}>
                    <div className="arrow back"></div>
                </button>
            )}
            {currentCard < 2 && (
                <button className="card-button" aria-label="Next Solution"onClick={()=>currentCardHandler("forward")}>
                    <div className="arrow"></div>
                </button>
            )}
        </div>
    );
  }

  let content = conclusion.map((section,index) => {
      if (index === currentCard) {
        return (
            <div key={index} className="card">
                <div className="head">{section.card.head}</div>
                <img className="img" alt={section.card.alt} src={section.card.pic}></img>
                <div>{section.card.content}</div>
                {buttons()}
            </div>
        );
      }
      else return "";
  })

  return (
    <div className="horizontal">
      {content}
    </div>
  );
}
