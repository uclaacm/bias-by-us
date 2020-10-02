import React, { useState } from "react";
import Post from "../posts/Post";
import CommentSection from "../comments/CommentSection";
import ForwardButton from "./ForwardButton";
import "./mainContent.css";
export default function PostsList(props) {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [blockRendering, setBlockRendering] = useState(false);
  const [forwardVisible, setForwardVisible] = useState(false);

  /*This function takes the list of post/followups, takes all the previousSections that are already loaded,
  and makes them show all their text*/
  let completedContent = props.content
    .slice(0, visibleSections)
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
        return <CommentSection key={index} followups={section.followups} />;
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
      if (section.post)
        return (
          <Post
            key={index}
            postContent={section.post}
            currentVisibleText={currentVisibleText}
            setCurrentVisibleText={setCurrentVisibleText}
            blockRendering={blockRendering}
            setBlockRendering={setBlockRendering}
          />
        );
      if (section.followups)
        return (
          <CommentSection
            key={index}
            followups={section.followups}
            currentVisibleText={currentVisibleText}
            setCurrentVisibleText={setCurrentVisibleText}
          />
        );
      return "";
    });
  let forwardVisibility = `${forwardVisible ? "" : "hidden-button"}`;
  return (
    <div>
      {completedContent}
      {currentContent}
      <div className={forwardVisibility}>
        <ForwardButton
          content={props.content}
          forwardVisible={forwardVisible}
          setForwardVisible={setForwardVisible}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
          currentVisibleText={currentVisibleText}
          setCurrentVisibleText={setCurrentVisibleText}
          blockRendering={blockRendering}
          setBlockRendering={setBlockRendering}
        />
      </div>
    </div>
  );
}
