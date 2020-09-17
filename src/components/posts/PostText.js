import React from "react";

function PostText(props) {
  return <p style={styles.bodyTextStyles}>{props.bodyText}</p>;
}
export default PostText;

const styles = {
  bodyTextStyles: {
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    marginTop: "20px",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    alignItems: "left",
    color: "#000000",
  },
};
