import React from "react";
import Post from "./components/posts/Post";
import "./App.css";
import CommentSection from "./components/comments/CommentSection";
import content from "./assets/content.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br className="separator"></br>

        <Post postContent={content.posts[0]} />
        <CommentSection followups={content.followups[0]} />

        <br className="separator"></br>

        <Post postContent={content.posts[0]} />

        <br className="separator"></br>

        <CommentSection followups={content.followups[0]} />
        <br className="separator"></br>
      </header>
    </div>
  );
}
export default App;
