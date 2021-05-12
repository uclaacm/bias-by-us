import React, { useContext } from "react";
import { SocialMediaContext } from "./socialMediaHandler";
import ProfileCreator from "./ProfileCreator";
import AdBreakdown from "./AdBreakdown";
import AdDisplay from "./AdDisplay";
import "./socialMedia.css";
import "../../../mainContent/mainContent.css";

export default function SocialMediaContainer(props) {
  const { profileCreated, selectedAd } = useContext(SocialMediaContext);

  return (
    <div className="flex-column">
      <div className="spaced-row">
        <div className="screen-container">
          <ProfileCreator />
        </div>
        {selectedAd /* conditionally render the ad portion*/ && (
          <div className="screen-container">
            <AdDisplay />
          </div>
        )}
      </div>
      {profileCreated /* conditionally render the ad breakdown portion */ && (
        <div className="spaced-row">
          <AdBreakdown />
        </div>
      )}
    </div>
  );
}
