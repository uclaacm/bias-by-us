import React, { useState, useEffect } from "react";
import "./AppMain.css";
import PostsList from "./components/mainContent/PostsList";
import labContent from "./assets/labContent";

import Navbar from "./components/mainContent/Navbar";
import ProgressBar from "./components/mainContent/ProgressBar";

function CaseStudyFacebook() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return width;
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      
      {windowDimensions > 1300 && 
        <ProgressBar 
          content = {labContent}
          visibleSections = {visibleSections}
          setVisibleSections = {setVisibleSections}
          setForwardVisible = {setForwardVisible}
          setCurrentVisibleText = {setCurrentVisibleText}
        />
      }
      

      <div className="posts">
        <PostsList 
        content={labContent} visibleText={0} 
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
