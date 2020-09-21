import React from "react";
import Post from "../posts/Post";
import CommentSection from "../comments/CommentSection";

export default function PostsList(props) {
  let ourContent = [];

  /*This function takes the list of post/followups from our backend and renders it accordingly
Some post sections might not have followups or vice versa, which is why it checks for null*/
  props.content.forEach((section) => {
    if (section.post != null)
      ourContent.push(<Post postContent={section.post} />);
    if (section.followups != null)
      ourContent.push(<CommentSection followups={section.followups} />);
  });

  return <div>{ourContent}</div>;
}
