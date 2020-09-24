import React from "react";
import Post from "../posts/Post";
import CommentSection from "../comments/CommentSection";

export default function PostsList(props) {
  /*This function takes the list of post/followups, takes all the previousSections that are already loaded,
  and makes them show all their text*/
  let completedContent = props.content
    .slice(0, props.visibleSections)
    .map((section, index) => {
      /*Not using ternaries since there might be 3 possibilities if we make
      interactive sections seperate from posts in the future
      */
      if (section.post)
        return (
          <Post
            key={index}
            postContent={section.post}
            currentVisibleText={section.post.bodyText.length}
          />
        );
      if (section.followups)
        return (
          <CommentSection
            key={index}
            followups={section.followups}
            currentVisibleText={section.followups.length}
          />
        );
      return "";
    });
  /* This function takes the section that the user is currently on, and makes it so that its content
    can change depending on how the DirectionButtons are pressed*/
  let currentContent = props.content
    .slice(props.visibleSections, props.visibleSections + 1)
    .map((section, index) => {
      /*Not using ternaries since there might be 3 possibilities if we make
    interactive sections seperate from posts in the future
    */
      if (section.post)
        return (
          <Post
            key={index}
            postContent={section.post}
            currentVisibleText={props.currentVisibleText}
          />
        );
      if (section.followups)
        return (
          <CommentSection
            key={index}
            followups={section.followups}
            currentVisibleText={props.currentVisibleText}
          />
        );
      return "";
    });
  return (
    <div>
      {completedContent}
      {currentContent}
    </div>
  );
}
