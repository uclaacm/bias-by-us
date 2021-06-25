import React from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "../components/mainContent/PostsList";
import { VisibilityProvider } from "../components/mainContent/commonLogic";

export default function FacialRecognition() {
  return (
    <VisibilityProvider>
      <FacialRecognitionContent />
    </VisibilityProvider>
  );
}

function FacialRecognitionContent() {
  return (
    <div className="posts">
      <PostsList content={FacialRecognitionInfo} />
    </div>
  );
}

const FacialRecognitionInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Case Study #3: Facial Recognition",
      subheader: "Stay Tuned For More!",
      bodyText: [
        {
          body: <p className="bold">We Will Work On This Case Study!</p>,
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Conclusion",
      header: "Conclusion",
      headerLink: true,
      linkTo: "conclusion",
      subheader: "Why Is This Important?",
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
