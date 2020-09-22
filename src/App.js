import React from "react";
import "./AppMain.css";
import PostsList from "./components/mainContent/PostsList";
import labContent from "./assets/labContent";

import Navbar from "./components/mainContent/Navbar";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      {/* below are Progress Bar and Direction Buttons placeholders*/}
      <div className="progress-bar">progress bar</div>
      <div className="direction-buttons">direction buttons</div>

      <div className="posts">
        <PostsList content={labContent} />
      </div>
    </div>
  );
}
export default App;
