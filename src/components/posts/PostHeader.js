import React from "react";
import "./posts.css";
import "../mainContent/mainContent.css";

function PostHeader(props) {
  return (
    <div>
      <img
        className="profile-pic"
        src={props.profilePic}
        alt="An icon that matches up with the post"
      />
      <div className="post-header text-bold ">{props.header}</div>

      <div className="post-subheader body-text text-bold ">
        {props.subheader}
      </div>
    </div>
  );
}

export default PostHeader;
