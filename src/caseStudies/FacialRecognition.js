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
];
