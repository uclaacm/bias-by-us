import React, { useState } from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";

export default function ResourcesPage() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  return (
    <div className="posts">
      <PostsList
        content={resourcesPageInfo}
        visibleText={0}
        forwardVisible={forwardVisible}
        setForwardVisible={setForwardVisible}
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        currentVisibleText={currentVisibleText}
        setCurrentVisibleText={setCurrentVisibleText}
      />
    </div>
  );
}

const resourcesPageInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Curious to learn more?",
      subheader: "Here's a list of resources you can use to learn more!",
      bodyText: [
        {
          body: <p className="bold">Separate resources by case study here!</p>,
        },
      ],
    },
  },
];
