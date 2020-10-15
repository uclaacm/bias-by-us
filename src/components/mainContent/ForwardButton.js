import React, { useEffect } from "react";
import "./mainContent.css";
import arrows from "../../assets/upArrow.svg";

export default function ForwardButton(props) {
  let currentSection = props.content[props.visibleSections];
  let currentLength = undefined;
  if (currentSection && currentSection.post)
    currentLength = currentSection.post.bodyText.length;
  else if (currentSection && currentSection.followups)
    currentLength = currentSection.followups.length;

  function addVisibleText() {
    if (props.currentVisibleText < currentLength) {
      handleForward();
      console.log("Added");
    } else props.setForwardVisible(true);
  }

  useEffect(() => {
    let forwardSection = setInterval(() => addVisibleText(), 1000);
    return function cleanup() {
      console.log("cleared interval");
      clearInterval(forwardSection);
    };
      // eslint-disable-next-line
  }, [props.visibleSections, props.currentVisibleText]);

  function handleForward() {
    props.setForwardVisible(false);

    let currentSection = props.content[props.visibleSections];
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
      props.visibleSections < props.content.length - 1 &&
      props.currentVisibleText >= currentLength
    ) {
      props.setVisibleSections(props.visibleSections + 1);
      props.setCurrentVisibleText(0);
    } else if (props.currentVisibleText < currentLength) {
      props.setCurrentVisibleText(props.currentVisibleText + 1);
    }
  }

  return (
    <div className="forward-container">
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
