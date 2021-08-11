import React from "react";
import "./posts.css";
import "../mainContent/mainContent.css";
import { Link } from "react-router-dom";

function HeaderLinkWrapper(props) {
  return props.headerLink ? (
    <Link to={props.linkTo}>
      <PostHeader {...props} />
    </Link>
  ) : (
    <PostHeader {...props} />
  );
}

function PostHeader(props) {
  return (
    <div>
      <img
        className="profile-pic"
        src={props.profilePic}
        alt={props.profilePicName}
      />
      <div className="post-header text-bold ">{props.header}</div>
      <div className="post-subheader body-text">{props.subheader}</div>
    </div>
  );
}

export default HeaderLinkWrapper;
