import React from "react";
import "./posts.css";
import "../mainContent/mainContent.css";
export default function PostText(props) {
  /*This mapping function takes the array of post body Text and renders each paragraph as a line of
body text */
  return (
    <div>
      {props.bodyText.map((paragraph, index) => {
        let postClass = `post-body-text body-text ${
          paragraph.bold ? "text-bold" : ""
        } `;
        return (
          <div key={index} className={postClass}>
            {paragraph.body}
          </div>
        );
      })}
    </div>
  );
}
