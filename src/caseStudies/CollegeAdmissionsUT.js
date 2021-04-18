import React, { useState } from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "../components/mainContent/PostsList";

export default function CollegeAdmissionsUT() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  return (
    <div className="posts">
      <PostsList
        content={CollegeAdmissionsInfo}
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

const CollegeAdmissionsInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Case Study #1: College Admissions",
      subheader: "Robots Reading Your Essays?",
      bodyText: [
        {
          body: <p className="bold">We Will Work On This Case Study!</p>,
        },
      ],
    },
  },
];
