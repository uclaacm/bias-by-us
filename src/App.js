import React, { useState } from "react";
import "./AppMain.css";
import DirectionButtons from "./components/mainContent/DirectionButtons";
import PostsList from "./components/mainContent/PostsList";
import labContent from "./assets/labContent";

import Navbar from "./components/mainContent/Navbar";

function App() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setcurrentVisibleText] = useState(0);
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      {/* below are Progress Bar and Direction Buttons placeholders*/}
      <div className="progress-bar">progress bar</div>
      <DirectionButtons
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        currentVisibleText={currentVisibleText}
        setcurrentVisibleText={setcurrentVisibleText}
      />

      <div className="posts">
        <PostsList
          content={labContent}
          visibleSections={visibleSections}
          currentVisibleText={currentVisibleText}
          visibleText={0}
        />
      </div>
    </div>
  );
}
export default App;
