import React from "react";
import "./essay.css";
export default function WordSuggestionsBar(props) {
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

  return <div className="word-suggestions-bar">{displayedOptions}</div>;
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
