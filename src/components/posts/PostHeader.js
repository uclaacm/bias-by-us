import React from "react";
import "./posts.css";
import "../mainContent/mainContent.css";

function PostHeader(props) {
  return (
    <div>
      <img
        className="profile-pic"
        src={props.profilePic}
        alt={props.profilePicName}
      />
      <div className="post-header text-bold ">{props.header}</div>

      <div className="post-subheader body-text text-italic">
        {props.subheader}
      </div>
    </div>
  );
}

export default PostHeader;
