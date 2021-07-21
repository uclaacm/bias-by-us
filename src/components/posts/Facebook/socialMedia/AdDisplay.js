import React, { useContext } from "react";
import { SocialMediaContext } from "./socialMediaHandler";
import adData from "../../../../assets/Facebook/adContent.js";
import "./socialMedia.css";

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
  return (
    <div id="shown-ad">
      <img
        src={adData[selectedAd].img}
        alt={`${selectedAd} clipart`}
        className="ad-image"
      ></img>
      <h2>{adData[selectedAd].header}</h2>
      <p>{adData[selectedAd].subheader}</p>
      <a
        href={adData[selectedAd].link}
        target="_blank"
        rel="noopener noreferrer"
        className="ad-apply-link"
      >
        Apply Now!
      </a>
      <div className="ad-section-bar"></div>
      <p>{adData[selectedAd].summary}</p>
      <p className="ad-specs">
        <div class="text-bold ad-specs-title">Requirements: </div>
        {adData[selectedAd].reqs}
      </p>
      <p className="ad-specs">
        <div class="text-bold ad-specs-title">Pay: </div>
        {adData[selectedAd].pay}
      </p>
    </div>
  );
}
