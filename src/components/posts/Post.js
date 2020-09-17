import React from "react";
import PostText from "./PostText";
import PostHeader from "./PostHeader";
export default function Post(props) {
  return (
    <div style={styles.containerStyles}>
      <PostHeader
        header={props.postContent.header}
        subheader={props.postContent.subheader}
      />
      <PostText bodyText={props.postContent.bodyText} />
    </div>
  );
}

const styles = {
  containerStyles: {
    backgroundColor: "white",
    textAlign: "left",
    width: "950px",
    borderRadius: "0px 25px 0px 0px",
  },
};
