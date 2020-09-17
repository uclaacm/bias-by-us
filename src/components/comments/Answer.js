import React from "react";

export default function Answer(props) {
  return (
    <div style={styles.answerContainer}>
      <div style={styles.answerHeaderStyle}>{props.answerHeaderText}</div>
      <div style={styles.answerStyle}>{props.answerText}</div>
    </div>
  );
}

const styles = {
  answerContainer: {
    backgroundColor: "#EEF0F1",
    borderRadius: "25px",
    marginLeft: "200px",
    marginRight: "10px",
    padding: "10px",
  },
  answerHeaderStyle: {
    textAlign: "left",
    color: "black",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "30px",
  },
  answerStyle: {
    textAlign: "left",
    color: "black",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "30px",
  },
};
