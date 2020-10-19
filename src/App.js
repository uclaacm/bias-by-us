import React, {useState} from "react";
import "./AppMain.css";
import PostsList from "./components/mainContent/PostsList";
import labContent from "./assets/labContent";

import Navbar from "./components/mainContent/Navbar";
import ProgressBar from "./components/mainContent/ProgressBar";

function App() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      
      <ProgressBar 
        content = {labContent}
        visibleSections = {visibleSections}
        setVisibleSections = {setVisibleSections}
        setForwardVisible = {setForwardVisible}
        setCurrentVisibleText = {setCurrentVisibleText}
      />
      

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
export default App;
