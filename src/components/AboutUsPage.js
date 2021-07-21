import React from "react";
import "../main.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";
import { VisibilityProvider } from "./mainContent/commonLogic";
export default function AboutUsPage() {
  return (
    <VisibilityProvider>
      <AboutUsPageContent />
    </VisibilityProvider>
  );
}

function AboutUsPageContent() {
  return (
    <div className="posts">
      <PostsList content={aboutUsInfo} />
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
