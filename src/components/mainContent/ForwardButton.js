import React, { useEffect } from "react";
import "./mainContent.css";
import arrows from "../../assets/upArrow.svg";
import {scroller as scroll} from "react-scroll";

export default function ForwardButton(props) {

  let currentSection = props.content[props.visibleSections];
  let currentLength= (currentSection.post) ?
  currentSection.post.bodyText.length
  : currentSection.followups.length;


  function addVisibleText() {
    if (props.currentVisibleText < currentLength) {
      handleForward();
      console.log("Added");
    } 
    else {
      if (!(props.visibleSections === props.content.length - 1)) // make visible if it isn't the last section of the page
        props.setForwardVisible(true);
    }
  }

  useEffect(() => {
    let forwardSection = setInterval(() => addVisibleText(), props.currentVisibleText === 0 ? 0 : 1000);
    return () =>{
      console.log("cleared interval");
      clearInterval(forwardSection);
    };
      // eslint-disable-next-line
  }, [props.visibleSections, props.currentVisibleText]);

  function handleForward() {
    props.setForwardVisible(false);

    /* If the current section is not the final section and all its text/components,
        is currently visible, then it will load the next section in
        and hide all of its text*/
    if (
      props.visibleSections < props.content.length - 1 &&
      props.currentVisibleText >= currentLength
    ) {
      props.setVisibleSections(props.visibleSections + 1);
      props.setCurrentVisibleText(0);
    } 
    else 
    {
      if (props.currentVisibleText === 0) {
        const section = props.content[props.visibleSections];
        /* scrollTo configuration options:
          - smooth: animates the scrolling with smooth movement
          - offset: scroll additional px (like padding), so that we can see the content under the navbar
          - duration: total duration of the scroll animation
        */
        scroll.scrollTo((section.post ? section.post.header : section.followups[0].question), {smooth:true, offset:-100, duration: 500});
      }
      if (props.currentVisibleText < currentLength) {
        props.setCurrentVisibleText(props.currentVisibleText + 1);
    }
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