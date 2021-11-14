import React, { useEffect, useReducer, useState } from "react";
import WrittenEssay from "./WrittenEssay";
import ScoreBar from "./ScoreBar";
import WordSuggestionsBar from "./WordSuggestionsBar";
import ScatterPlot from "./ScatterPlot";
import "./essay.css";

//words reducer set-up

//our wordSections
//changeable sections will also have a displayed property
const INITIAL_WORD_LENGTH = 3;
const wordSections = [
  {
    plain: "This is our example",
  },
  {
    changeable: ["essay", "activity", "game"],
    heScores: [10, 20, 30],
    sheScores: [5, 10, 15],
  },
  {
    plain: "made by our devs! What's your favorite",
  },
  {
    changeable: ["meal", "food", "dish"],
    heScores: [10, 20, 30],
    sheScores: [5, 10, 15],
  },
  {
    plain: "to cook? I know that I love",
  },
  {
    changeable: ["fried rice", "spam masubi", "sushi"],
    heScores: [10, 20, 30],
    sheScores: [5, 10, 15],
  },
  {
    plain: "at any time.",
  },
];

/*set the displayed property to the middle index of the changeableWords*/
const defaultWords = wordSections.map((section) =>
  section.plain
    ? { ...section }
    : {
        ...section,
        displayed: 1,
      }
);

//helper function to calculate score based off of a list of words
function calcScore(wordsList) {
  /*add 0 to total if the word is plain text,
  or add the value of its entry in the scores array if it's a changeable word
  */
  const changeablesLength = wordsList.reduce(
    (changeables, curr) => (curr.changeable ? changeables + 1 : changeables),
    0
  );
  return (
    wordsList.reduce(
      (total, curr) =>
        curr.plain
          ? total
          : total +
            (20 +
              curr.heScores[curr.displayed] -
              curr.sheScores[curr.displayed]),
      0
    ) / changeablesLength
  );
}

/*action has type, index, newWord, customHeScore, customSheScore
new word is either an index for regular words, or a string for the new word if it is custom
reducer function that handles changing our wordList or resetting it*/
const wordReducer = (prevWords, action) => {
  switch (action.type) {
    case "changeWord": {
      const changeIndex = action.index;
      //only changing the requested word
      return prevWords.map((section, index) =>
        index === changeIndex
          ? {
              ...section,
              displayed: action.newWord,
            }
          : { ...section }
      );
    }
    case "customWord": {
      const changeIndex = action.index;
      return prevWords.map((section, index) =>
        index === changeIndex
          ? {
              ...section,
              displayed: INITIAL_WORD_LENGTH,
              changeable: [
                ...section.changeable.slice(0, INITIAL_WORD_LENGTH),
                action.newWord,
              ],
              heScores: [
                ...section.heScores.slice(0, INITIAL_WORD_LENGTH),
                action.customHeScore,
              ],
              sheScores: [
                ...section.sheScores.slice(0, INITIAL_WORD_LENGTH),
                action.customSheScore,
              ],
            }
          : { ...section }
      );
    }
    //can't use spreadOperator because of nested array data
    //reset to base with only INITIAL_WORD_LENGTH to remove custom words
    case "resetWords": {
      return prevWords.map((section) =>
        section.plain
          ? { ...section }
          : {
              ...section,
              displayed: 1,
              changeable: [...section.changeable.slice(0, INITIAL_WORD_LENGTH)],
              heScores: [...section.heScores.slice(0, INITIAL_WORD_LENGTH)],
              sheScores: [...section.sheScores.slice(0, INITIAL_WORD_LENGTH)],
            }
      );
    }

    default: {
      return prevWords;
    }
  }
};

export default function EssayContainer() {
  const [essayScore, setEssayScore] = useState(calcScore(defaultWords));
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [wordsList, dispatchWordsList] = useReducer(wordReducer, defaultWords);

  //function to update essay score when the words list changes
  useEffect(() => {
    setEssayScore(calcScore(wordsList));
    console.log("WordsList has changed!");
  }, [wordsList]);

  //helper function for accepting custom words
  async function tryCustomWord(customWord, chosenIndex) {
    const currWords = wordsList[chosenIndex].changeable;
    //catch if the word's already among the options
    for (let word of currWords) {
      if (customWord === word) {
        alert("This word's already an option!");
        return;
      }
    }
    //catch empty word or multiple word errors
    if (!customWord || customWord.indexOf(" ") > -1) {
      window.alert("Custom words must be a single word!");
      return;
    }
    const queryUrl =
      process.env.REACT_APP_WORD_EMBEDDING_ENTRY_POINT + "?word=" + customWord;
    const wordRes = await fetch(queryUrl);
    if (wordRes.status >= 400) {
      window.alert("Invalid word, must be a word in the dictionary!");
      return;
    } else {
      const wordData = await wordRes.json();
      const newHeScore = wordData["heScore"];
      const newSheScore = wordData["sheScore"];
      dispatchWordsList({
        type: "customWord",
        index: chosenIndex,
        customHeScore: newHeScore,
        customSheScore: newSheScore,
        newWord: customWord,
      });
      console.log("Successfully chosen custom word!");
    }
  }

  return (
    <div className="essay-container">
      <div className="essay-container essay-background">
        <div>
          <ScoreBar essayScore={essayScore} />
        </div>
        <div className="written-essay">
          <WrittenEssay
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
            wordsList={wordsList}
            wordSections={wordSections}
          />
        </div>
        <div>
          {/* conditionally render the word suggestions bar */}
          {selectedIndex ? (
            <WordSuggestionsBar
              selectedIndex={selectedIndex}
              wordsList={wordsList}
              dispatchWordsList={dispatchWordsList}
              tryCustomWord={tryCustomWord}
            />
          ) : (
            "Select a highlighted word to get started!"
          )}
        </div>

        <div
          className="reset-button"
          onClick={() => {
            setSelectedIndex(null);
            dispatchWordsList({ type: "resetWords" });
          }}
        >
          Reset The Essay
        </div>
      </div>
      <div>Similarity of Words to He/She</div>
      <ScatterPlot wordsList={wordsList} />
    </div>
  );
}
