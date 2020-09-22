import React from "react";
import Post from "../posts/Post";
import CommentSection from "../comments/CommentSection";

export default function PostsList(props) {
  /*This function takes the list of post/followups from our backend and renders it accordingly
Sections can either be posts or followups (Interactive sections might be seperate in future as well*/
  return (
    <div>
      {props.content.map((section, index) => {
        /*Not using ternaries since there might be 3 possibilities if we make
          interactive sections seperate from posts in the future
          */
        if (section.post)
          return <Post key={index} postContent={section.post} />;
        if (section.followups)
          return <CommentSection key={index} followups={section.followups} />;
        return "";
      })}
    </div>
  );
}
