import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
export default function CommentSection(props) {
  let followupSection = [];
  for (let i = 0; i < props.followups.length; i++) {
    if (props.followups[i].question != null) {
      followupSection.push(
        <Question questionText={props.followups[i].question} />
      );
      followupSection.push(<div style={styles.separator}></div>);
    }
    if (
      props.followups[i].answer != null ||
      props.followups[i].answerHeader != null
    ) {
      followupSection.push(
        <Answer
          answerHeaderText={props.followups[i].answerHeader}
          answerText={props.followups[i].answer}
        />
      );
      followupSection.push(<div style={styles.separator}></div>);
    }
  }
  return (
    <div style={styles.containerStyle}>
      <div style={styles.separator}></div>
      <div style={styles.barSeparator}></div>
      <div style={styles.separator}></div>
      {followupSection}
      <div style={styles.separator}></div>
    </div>
  );
}

const styles = {
  containerStyle: {
    backgroundColor: "white",
    width: "950px",
    borderRadius: "0px 0px 25px 25px",
  },
  separator: {
    height: "10px",
  },
  barSeparator: {
    width: "900px",
    height: "2px",
    marginLeft: "25px",
    backgroundColor: "black",
    marginBottom: "10px",
  },
};
