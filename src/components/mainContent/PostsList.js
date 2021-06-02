import React, { useContext } from "react";
import Post from "../posts/Post";
import CommentSection from "../comments/CommentSection";
import ForwardButton from "./ForwardButton";
import { VisibilityContext } from "./commonLogic";
import "./mainContent.css";
export default function PostsList(props) {
  const { visibleSections, forwardVisible, currentVisibleText } =
    useContext(VisibilityContext);
  /*This function takes the list of post/followups, takes all the previousSections that are already loaded,
  and makes them show all their text*/
  let completedContent = props.content
    .slice(0, visibleSections)
    .map((section, index) => {
      /*Not using ternaries since there might be 3 possibilities if we make
      interactive sections seperate from posts in the future
      */
      //Must pass in props because currentVisibleText is conditional for each thing
      if (section.post) {
        return (
          <Post
            key={index}
            postContent={section.post}
            currentVisibleText={section.post.bodyText.length}
          />
        );
      } else if (section.commentSection)
        return (
          <CommentSection
            key={index}
            commentSection={section.commentSection}
            address={section.commentSection.followups[0].question}
          />
        );
      return "";
    });
  /* This function takes the section that the user is currently on, and makes it so that its content
    can change depending on how the DirectionButtons are pressed*/
  let currentContent = props.content
    .slice(visibleSections, visibleSections + 1)
    .map((section, index) => {
      /*Not using ternaries since there might be 3 possibilities if we make
    interactive sections seperate from posts in the future
    */
      if (section.post) {
        return (
          <Post
            key={index}
            postContent={section.post}
            currentVisibleText={currentVisibleText}
          />
        );
      } else if (section.commentSection) {
        return (
          <CommentSection
            key={index}
            commentSection={section.commentSection}
            address={section.commentSection.followups[0].question}
            currentVisibleText={currentVisibleText}
          />
        );
      } else return "";
    });
  let forwardVisibility = `${forwardVisible ? "" : "hidden-button"}`;
  return (
    <div>
      {completedContent}
      {currentContent}
      <div className={forwardVisibility}>
        <ForwardButton content={props.content} />
      </div>
    </div>
  );
}
