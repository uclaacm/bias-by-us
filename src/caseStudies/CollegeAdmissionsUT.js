import React from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "../components/mainContent/PostsList";
import { VisibilityProvider } from "../components/mainContent/commonLogic";

export default function CollegeAdmissionsUT() {
  return (
    <VisibilityProvider>
      <CollegeAdmissionsUTContent />
    </VisibilityProvider>
  );
}

function CollegeAdmissionsUTContent() {
  return (
    <div className="posts">
      <PostsList content={CollegeAdmissionsInfo} />
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
