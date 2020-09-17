import React from "react";

export default function Question(props) {
  return <div style={styles.questionStyle}>{props.questionText}</div>;
}

const styles = {
  questionStyle: {
    backgroundColor: "#EEF0F1",
    borderRadius: "25px",
    textAlign: "left",
    width: "80%",
    padding: "10px",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    alignItems: "left",
    color: "#4267B2",
  },
};
