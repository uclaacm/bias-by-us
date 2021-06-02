import React, { useEffect, useContext } from "react";
import "./mainContent.css";
import "../../AppMain.css";
import { scroller as scroll } from "react-scroll";
import forwardButton from "../../assets/forwardButton.svg";
import { VisibilityContext } from "./commonLogic";

export default function ForwardButton(props) {
  const {
    visibleSections,
    currentVisibleText,
    setForwardVisible,
    setVisibleSections,
    setCurrentVisibleText,
  } = useContext(VisibilityContext);

  let currentSection = props.content[visibleSections];
  let currentLength = currentSection.post
    ? currentSection.post.bodyText.length
    : currentSection.commentSection.followups.length;

  function addVisibleText() {
    if (currentVisibleText < currentLength) {
      handleForward();
    } else {
      if (!(visibleSections === props.content.length - 1))
        // make visible if it isn't the last section of the page
        setForwardVisible(true);
    }
  }

  useEffect(() => {
    let forwardSection = setInterval(
      () => addVisibleText(),
      currentVisibleText === 0 ? 0 : 300
    ); /* fade in animation will be added later */
    return () => {
      clearInterval(forwardSection);
    };
    // eslint-disable-next-line
  }, [visibleSections, currentVisibleText]);

  function handleForward() {
    setForwardVisible(false);
    /* If the current section is not the final section and all its text/components,
        is currently visible, then it will load the next section in
        and hide all of its text*/
    if (
      visibleSections < props.content.length - 1 &&
      currentVisibleText >= currentLength
    ) {
      setVisibleSections(visibleSections + 1);
      setCurrentVisibleText(0);
    } else {
      if (currentVisibleText === 0) {
        const section = props.content[visibleSections];
        /* scrollTo configuration options:
          - smooth: animates the scrolling with smooth movement
          - offset: scroll additional px (like padding), so that we can see the content under the navbar
          - duration: total duration of the scroll animation
        */
        scroll.scrollTo(
          section.post
            ? section.post.header
            : section.commentSection.followups[0].question,
          { smooth: true, offset: -100, duration: 500 }
        );
        /* section.post.header and section.commentSection.followups[0].question are unique id values that will let the react scroller to know where to scroll to */
      }
      if (currentVisibleText < currentLength) {
        setCurrentVisibleText((prevCurrent) => prevCurrent + 1);
      }
    }
  }

  return (
    <div className="forward-container">
      <button
        aria-label="Continue to next part of case study"
        className="forward-button"
        onClick={handleForward}
      >
        <img
          src={forwardButton}
          alt="downward arrow towards next section"
        ></img>
      </button>
    </div>
  );
}
