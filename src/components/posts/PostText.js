import React from "react";
import "./posts.css";
import "../mainContent/mainContent.css";
export default function PostText(props) {
  /*This mapping function takes the array of post body Text and renders each paragraph that
  should be designated as visible */
  let visibleParagraphs = props.bodyText.map((paragraph, index) => {
    let postClass = `post-body-text body-text ${
      paragraph.bold ? "text-bold " : ""
    } `;
    postClass += `${props.currentVisibleText < index + 1 ? "hidden-text" : ""}`;
    return (
      <div key={index} className={postClass}>
        {paragraph.body}
      </div>
    );
  });

  return <div>{visibleParagraphs}</div>;
}
