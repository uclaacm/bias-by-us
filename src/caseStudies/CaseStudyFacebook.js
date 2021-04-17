import React, { useState } from "react";
import "../AppMain.css";
import PostsList from "../components/mainContent/PostsList";
import labContent from "../assets/labContent";
import { useWindowDimensions } from "../components/mainContent/commonLogic";
import ProgressBar from "../components/mainContent/ProgressBar";

function CaseStudyFacebook() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  const [windowWidth] = useWindowDimensions();

  return (
    <div className="app">
      {windowWidth > 1300 && (
        <ProgressBar
          content={labContent}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
          setForwardVisible={setForwardVisible}
          setCurrentVisibleText={setCurrentVisibleText}
        />
      )}

      <div className="posts">
        <PostsList
          content={labContent}
          visibleText={0}
          forwardVisible={forwardVisible}
          setForwardVisible={setForwardVisible}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
          currentVisibleText={currentVisibleText}
          setCurrentVisibleText={setCurrentVisibleText}
        />
      </div>
    </div>
  );
}
export default CaseStudyFacebook;
