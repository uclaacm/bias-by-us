import React from "react";
import logo from "../../assets/TeachLogo.png";

function PostHeader(props) {
  return (
    <div style={styles.containerStyles}>
      <img src={logo} alt="" style={styles.imgStyles} />
      <div style={styles.headerTextSTyles}>{props.header}</div>

      <div style={styles.subheaderTextStyles}>{props.subheader}</div>
    </div>
  );
}
const styles = {
  imgStyles: {
    float: "left",
    width: "89px",
    height: "83px",
  },
  containerStyles: {
    backgroundColor: "white",
    textAlign: "left",
    width: "950px",
    height: "90px",
    borderRadius: "25px",
  },
  headerTextSTyles: {
    marginLeft: "100px",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "36px",
    lineHeight: "45px",
    alignItems: "left",
    color: "#000000",
  },
  subheaderTextStyles: {
    marginLeft: "100px",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    alignItems: "left",
    color: "#606060",
  },
};

export default PostHeader;
