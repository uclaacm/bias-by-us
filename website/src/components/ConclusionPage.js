import React from "react";
import "../main.css";
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
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Additional Resources",
      header: "Additional Resources",
      headerLink: true,
      linkTo: "resources",
      subheader: "More resources to learn more about what we have covered",
      bodyText: [
        {
          body: (
            <p className="bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          body: (
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">{`TODO: `} </mark>Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          ),
        },
      ],
    },
  },
];
