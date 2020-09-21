import React from "react";
import PostText from "./PostText";
import PostHeader from "./PostHeader";
import "./posts.css";
export default function Post(props) {
  return (
    <div className="postContainer">
      {/* This renders both the header and text within the same post bubble */}
      <PostHeader
        header={props.postContent.header}
        subheader={props.postContent.subheader}
      />
      <PostText bodyText={props.postContent.bodyText} />
    </div>
  );
}
