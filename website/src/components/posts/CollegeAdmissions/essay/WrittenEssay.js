import React from "react";
import "./essay.css";

export default function WrittenEssay(props) {
  const sections = props.wordsList.map((section, index) =>
    section.plain ? (
      <PlainSection text={section.plain} key={index} />
    ) : (
      <ChangeableSection
        text={section.changeable[section.displayed]}
        key={index}
        selected={props.selectedIndex === index ? true : false}
        onClick={() => {
          //react yells at me if i don't wrap this in an arrow function
          props.setSelectedIndex(index);
        }}
      />
    )
  );
  return <div className="essay-section">{sections}</div>;
}

function PlainSection(props) {
  return <div className="essay-sentence">{props.text}</div>;
}

function ChangeableSection(props) {
  return (
    <div
      onClick={props.onClick}
      className={`essay-sentence ${
        props.selected ? "selected-word" : "changeable-word"
      }`}
    >
      {props.text}
    </div>
  );
}
