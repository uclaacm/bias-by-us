import React from "react";
import "./posts.css";

function PostText(props) {
  let postContent = props.bodyText.map((paragraph) => {
    let postClass = "postBodyText";
    if (paragraph.bold === true) postClass += " boldText";
    return <div className={postClass}>{paragraph.body}</div>;
  });

  return <div>{postContent}</div>;
}

export default PostText;
