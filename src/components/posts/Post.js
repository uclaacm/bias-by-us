import React from "react";
import PostText from "./PostText";
import PostHeader from "./PostHeader";
import "./posts.css";
import "../mainContent/mainContent.css";
export default function Post(props) {
  return (
    <div className="post-container content-container " id={props.name}>
      {/* This renders both the header and text within the same post bubble */}
      <PostHeader
        header={props.postContent.header}
        subheader={props.postContent.subheader}
        profilePic={props.postContent.profilePic}
      />
      <PostText
        bodyText={props.postContent.bodyText}
        currentVisibleText={props.currentVisibleText}
        setCurrentVisibleText={props.setCurrentVisibleText}

      />
      <hr className="divider" />
    </div>
  );
}
