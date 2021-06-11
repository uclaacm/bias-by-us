import React from "react";
import PostText from "./PostText";
import PostHeader from "./PostHeader";
import "./posts.css";
import "../mainContent/mainContent.css";

/* Post must pass down currentVisibleText through props 
since it depends on if it's the last post to be shown or not */
export default function Post(props) {
  return (
    <div
      className="post-container content-container "
      id={props.postContent.header}
    >
      {/* This renders both the header and text within the same post bubble */}
      <PostHeader
        header={props.postContent.header}
        headerLink={props.postContent.headerLink}
        linkTo={props.postContent.linkTo}
        subheader={props.postContent.subheader}
        profilePic={props.postContent.profilePic}
        profilePicName={props.postContent.profilePicName}
      />
      <PostText
        bodyText={props.postContent.bodyText}
        currentVisibleText={props.currentVisibleText}
      />
    </div>
  );
}
