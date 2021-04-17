import React, { useState } from "react";
import "../AppMain.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";

export default function LandingPage() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);
  return (
    <div className="posts">
      <PostsList
        content={landingPageInfo}
        visibleText={0}
        forwardVisible={forwardVisible}
        setForwardVisible={setForwardVisible}
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        currentVisibleText={currentVisibleText}
        setCurrentVisibleText={setCurrentVisibleText}
      />
    </div>
  );
}

const landingPageInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Welcome To Bias By Us!",
      subheader: "It's not just humans that can be biased",
      bodyText: [
        {
          body: (
            <p className="bold">
              Bias By Us is an interactive explanation of bias in machine
              learning algorithms, and how they affect multiple aspects of
              every-day life!
            </p>
          ),
        },
        {
          body: (
            <p>
              We're going to highlight three different case studies that
              showcase just how pervasive biases can be to our lives, from small
              things like the ads that appear on your social media feed to
              things as monumental as applying for college admission!
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">{`TODO: `} </mark>Insert quick explanations
              of each case study with a link to each one, so that they can
              navigate through the homepage as well, not just the navbar!
            </p>
          ),
        },
      ],
    },
  },
];
