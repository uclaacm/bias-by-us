import React from "react";
import logo from "../../assets/teachLA.png";
import "./posts.css";

function PostHeader(props) {
  return (
    <div>
      <img className="profilePic" src={logo} alt="A profile pic" />
      <div className="postHeader">{props.header}</div>

      <div className="postSubheader">{props.subheader}</div>
    </div>
  );
}

export default PostHeader;
