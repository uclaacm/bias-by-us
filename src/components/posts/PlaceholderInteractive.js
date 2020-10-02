import React from "react";
import "./posts.css";
import "../mainContent/mainContent.css";
export default function PlaceholderInteractive(props) {
  return (
    <div>
      <button className="body-text post-body-text">
        Click me to mark this section as "completed"
      </button>
    </div>
  );
}
