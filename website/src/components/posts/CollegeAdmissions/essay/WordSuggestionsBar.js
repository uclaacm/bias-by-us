import React, { useState } from "react";
import "./essay.css";
export default function WordSuggestionsBar(props) {
  const [customWordInput, setCustomWordInput] = useState("");
  const optionObj = props.wordsList[props.selectedIndex];
  const wordOptions = optionObj.changeable;

  const displayedOptions = wordOptions.map((word, index) =>
    index === optionObj.displayed ? (
      <WordSuggestion word={word} selected={true} key={index} />
    ) : (
      <WordSuggestion
        word={word}
        selected={false}
        key={index}
        onClick={() => {
          //crashes if not in arrow function
          props.dispatchWordsList({
            type: "changeWord",
            index: props.selectedIndex,
            newWord: index,
          });
        }}
      />
    )
  );

  return (
    <div>
      <div className="word-suggestions-bar">{displayedOptions}</div>
      <div className="essay-lower-bar">
        {`Selected Word's Score: 
        ${(
          20 +
          optionObj.heScores[optionObj.displayed] -
          optionObj.sheScores[optionObj.displayed]
        ).toFixed(2)}
        `}
      </div>
      <div className="essay-lower-bar">
        <div>Custom word: </div>
        <input
          type="text"
          value={customWordInput}
          onChange={(event) => {
            setCustomWordInput(event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.tryCustomWord(customWordInput, props.selectedIndex);
            setCustomWordInput("");
          }}
        >
          Use Custom Word
        </button>
      </div>
    </div>
  );
}

function WordSuggestion(props) {
  return (
    <div
      onClick={props.onClick}
      className={
        props.selected ? "selected-word-suggestion" : "word-suggestion"
      }
    >
      {props.word}
    </div>
  );
}
