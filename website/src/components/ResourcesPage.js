import React from "react";
import "../main.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";
import { VisibilityProvider } from "./mainContent/commonLogic";

export default function ResourcesPage() {
  return (
    <VisibilityProvider>
      <ResourcesPageContent />
    </VisibilityProvider>
  );
}

function ResourcesPageContent() {
  return (
    <div className="posts">
      <PostsList content={resourcesPageInfo} />
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
