import React, { useState, useEffect } from "react";
import "../AppMain.css";
import PostsList from "../components/mainContent/PostsList";
import labContent from "../assets/labContent";
import { useWindowDimensions } from "../components/mainContent/commonLogic";
import ProgressBar from "../components/mainContent/ProgressBar";

//HOC that is less expensive to re-render with memoization than entire component tree
function CaseStudyFacebook() {
  const [windowWidth] = useWindowDimensions();
  const [displayProgress, setDisplayProgress] = useState(true);

  useEffect(() => {
    setDisplayProgress(windowWidth > 1300);
  }, [windowWidth]);
  return <FacebookContent displayProgress={displayProgress} />;
}

/*The Memoized Page only rerenders whenever the displayProgress prop changes, 
which is handled by the HOC above*/
const FacebookContent = React.memo(function FacebookContent(props) {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);

  return (
    <div className="app">
      {props.displayProgress && (
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
});
export default CaseStudyFacebook;
