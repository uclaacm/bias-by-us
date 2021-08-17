import React, { useEffect } from "react";
import "../main.css";
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
  useEffect(() => {
    async function warmupModel() {
      const queryUrl =
        process.env.REACT_APP_WORD_EMBEDDING_ENTRY_POINT + "?word=test";
      await fetch(queryUrl);
      console.log("Warming up our model!");
    }
    warmupModel();
  }, []);
  return (
    <div className="posts">
      <PostsList content={labContent} />
    </div>
  );
}
