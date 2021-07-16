import React from "react";
import "../AppMain.css";
import PostsList from "../components/mainContent/PostsList";
import { VisibilityProvider } from "../components/mainContent/commonLogic";
import labContent from "../assets/College/collegeLabContent";
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
      <PostsList content={labContent} />
    </div>
  );
}
