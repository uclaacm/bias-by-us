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

      <div className="posts">
        <PostsList content={labContent} visibleText={0} />
      </div>
    </div>
  );
}
export default App;
