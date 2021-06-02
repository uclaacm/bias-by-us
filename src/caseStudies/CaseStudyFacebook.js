import React from "react";
import "../AppMain.css";
import PostsList from "../components/mainContent/PostsList";
import labContent from "../assets/Facebook/facebookLabContent";
import ProgressBar from "../components/mainContent/ProgressBar";
import { VisibilityProvider } from "../components/mainContent/commonLogic";

export default function CaseStudyFacebook() {
  return (
    <VisibilityProvider>
      <CaseStudyFacebookContent />
    </VisibilityProvider>
  );
}

function CaseStudyFacebookContent() {
  return (
    <div className="app">
      <ProgressBar content={labContent} />

      <div className="posts">
        <PostsList content={labContent} />
      </div>
    </div>
  );
}
