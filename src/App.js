import React from "react";
import Post from "./components/posts/Post";
import "./App.css";
import CommentSection from "./components/comments/CommentSection";
import Content from "./assets/Content.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.separator}></div>
        <Post postContent={Content.posts[0]} />

        <CommentSection followups={Content.followups[0]} />

        <div style={styles.separator}></div>

        <Post postContent={Content.posts[0]} />

        <div style={styles.separator}></div>
        <CommentSection followups={Content.followups[0]} />
        <div style={styles.separator}></div>
      </header>
    </div>
  );
}
const styles = {
  separator: {
    height: "100px",
  },
};
export default App;
