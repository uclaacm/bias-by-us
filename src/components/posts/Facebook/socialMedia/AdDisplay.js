import React, { useContext } from "react";
import { SocialMediaContext } from "./socialMediaHandler";

export default function AdDisplay(props) {
  const { selectedAd } = useContext(SocialMediaContext);
  if (selectedAd === "default")
    return (
      <div id="shown-ad">
        <p>
          Imagine the user scrolling through their home feed and seeing a job
          ad.
        </p>
        <p>
          The histogram below displays the frequency of different ads the user
          might see each time they refresh their feed.
        </p>
        <p>
          Simulate some refreshes, and then click on a bar to view the
          corresponding ad!
        </p>
      </div>
    );
  return <div id="shown-ad">Will display the {selectedAd} ad</div>;
}
