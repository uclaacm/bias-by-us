import React, {useEffect, useReducer, useState} from "react";
import WrittenEssay from "./WrittenEssay";
import ScoreBar from "./ScoreBar";
import WordSuggestionsBar from "./WordSuggestionsBar";
import "./essay.css";

//words reducer set-up

//our wordSections
//changeable sections will also have a displayed property
const wordSections = [
    {
        plain: "This is our example"
    },
    {
        changeable: ["essay", "activity", "game"],
        scores: [10,20,30]
    },
    {
        plain: "made by our devs! What's your favorite"
    },
    {
        changeable: ["meal", "food", "dish"],
        scores: [10,20,30]
    },
    {
        plain: "to cook?"
    }
];

//set the displayed property to the middle index of the changeableWords
const defaultWords = wordSections.map(section => section.plain ? {...section} 
    : {
        ...section,
        displayed: 1
    }
);

//get the default score by tallying up score of all changeable words
const defaultScore = defaultWords.reduce((total,curr) => curr.plain ? total 
: total + curr.scores[curr.displayed], 0);

//action has type, index, newWord
//reducer function that handles changing our wordList or resetting it
const wordReducer = (prevWords, action) => {
    switch (action.type){
        case "changeWord": {
            const changeIndex = action.index;
            //only changing the requested word
            return prevWords.map((section,index) => index === changeIndex ? {
                ...section,
                displayed: action.newWord
            } 
            : {...section});
        } 
        //can't use spreadOperator because of nested array data
        case "resetWords": {
            return prevWords.map(section => section.plain ? {...section} 
                : {
                    ...section,
                    displayed: 1
                }
            );
        }

        default: {
            return prevWords;
        }
    }
}

export default function EssayContainer(){
    const [essayScore, setEssayScore] = useState(defaultScore);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [wordsList, dispatchWordsList] = useReducer(wordReducer,defaultWords);
    
    //function to update essay score when the words list changes
    useEffect(() => {
        setEssayScore(wordsList.reduce((total,curr) => curr.plain ? total 
        : total + curr.scores[curr.displayed], 0) 
        )
        console.log("WordsList has changed!");
    },[wordsList])

    return (
        <div className = "essay-container">
            <div>
                <ScoreBar essayScore = {essayScore}/>
            </div>
            <div className = "written-essay">
                <WrittenEssay 
                    setSelectedIndex = {setSelectedIndex}
                    selectedIndex = {selectedIndex}
                    wordsList = {wordsList}
                    wordSections = {wordSections}
                />
            </div>
            <div>
                {/* conditionally render the word suggestions bar */}
                {selectedIndex ? <WordSuggestionsBar 
                    selectedIndex = {selectedIndex}
                    wordsList = {wordsList}
                    dispatchWordsList = {dispatchWordsList}
                /> : "Select a highlighted word to get started!" }

            </div>

            <div 
            className = "reset-button"
            onClick= {() => {
                setSelectedIndex(null);
                dispatchWordsList({type: "resetWords"})
            }}>
                Reset The Essay
            </div>
        </div>
    )
}