import React from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";
import { VisibilityProvider } from "./mainContent/commonLogic";

export default function ConclusionPage() {
  return (
    <VisibilityProvider>
      <ConclusionPageContent />
    </VisibilityProvider>
  );
}

function ConclusionPageContent() {
  return (
    <div className="posts">
      <PostsList content={conclusionPageInfo} />
    </div>
  );
}

const conclusionPageInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Thanks for taking the time to learn more about biases!",
      subheader: "We hope you found this useful! ",
      bodyText: [
        {
          body: (
            <p className="bold">
              This will be where our conclusion will be. Stay tuned for what
              will get added soon!
            </p>
          ),
        },
      ],
    },
  },
];
