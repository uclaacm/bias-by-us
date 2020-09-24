import React from "react";
import "./mainContent.css";
import arrows from "../../assets/upArrow.svg";
import content from "../../assets/labContent.js";
export default function DirectionButtons(props) {
  function handleBackward() {
    let previousSection = content[props.visibleSections - 1];
    let previousLength = undefined;
    if (previousSection && previousSection.post)
      previousLength = previousSection.post.bodyText.length;
    else if (previousSection && previousSection.followups)
      previousLength = previousSection.followups.length;

    /*Should we use SWITCH statements instead */
    /* If the current Section is not the first one and all its text is invisible.
    it will go back to the previous section and make all its text visible*/
    if (props.visibleSections > 0 && props.currentVisibleText <= 0) {
      props.setVisibleSections(props.visibleSections - 1);
      props.setcurrentVisibleText(previousLength);
    } else if (props.visibleSections >= 0 && props.currentVisibleText > 0) {
      /* If the current Section still shows text/components, then it will hide some of the
    text/components that it is showing*/
      props.setcurrentVisibleText(props.currentVisibleText - 1);
    }
  }

  function handleForward() {
    let currentSection = content[props.visibleSections];
    let currentLength = undefined;
    if (currentSection && currentSection.post)
      currentLength = currentSection.post.bodyText.length;
    else if (currentSection && currentSection.followups)
      currentLength = currentSection.followups.length;

    /*Should we use SWITCH statements instead */
    /* If the current section is not the final section and all its text/components,
    is currently visible, then it will load the next section in
    and hide all of its text*/
    if (
      props.visibleSections < content.length - 1 &&
      props.currentVisibleText >= currentLength
    ) {
      props.setVisibleSections(props.visibleSections + 1);
      props.setcurrentVisibleText(0);
    } else if (props.currentVisibleText < currentLength) {
      /* If the current section is not displaying all of its text/components, let the next one become visible*/
      props.setcurrentVisibleText(props.currentVisibleText + 1);
    }
  }
  return (
    <div className="direction-container">
      <button className="nav-button backward-button" onClick={handleBackward}>
        <img
          className="button-image"
          src={arrows}
          alt="Up arrow to go backwards in Case Study"
        />
      </button>
      <button className="nav-button forward-button" onClick={handleForward}>
        <img
          className="button-image forward-image"
          src={arrows}
          alt="Down arrow to go forwards in Case Study"
        />
      </button>
    </div>
  );
}
