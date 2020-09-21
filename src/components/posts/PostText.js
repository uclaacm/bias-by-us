import React from "react";
import "./posts.css";

function PostText(props) {
  /*This mapping function takes the array of post body Text and renders each paragraph as a line of
body text */
  let postContent = props.bodyText.map((paragraph) => {
    let postClass = "postBodyText";
    if (paragraph.bold === true) postClass += " boldText";
    return <div className={postClass}>{paragraph.body}</div>;
  });

  return <div>{postContent}</div>;
}

export default PostText;
