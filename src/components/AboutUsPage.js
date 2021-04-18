import React, { useState } from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";

export default function LandingPage() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  return (
    <div className="posts">
      <PostsList
        content={aboutUsInfo}
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

const aboutUsInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Welcome To Bias By Us!",
      subheader: "It's not just humans that can be biased",
      bodyText: [
        {
          body: (
            <p className="bold">
              This will be a page with information about TeachLA as a whole, and
              what Learning Labs aim to do!
            </p>
          ),
        },
      ],
    },
  },
];
