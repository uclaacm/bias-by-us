import React from "react";
import "../main.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";
import { VisibilityProvider } from "./mainContent/commonLogic";

export default function ResourcesPage() {
  return (
    <VisibilityProvider>
      <ResourcesPageContent />
    </VisibilityProvider>
  );
}

function ResourcesPageContent() {
  return (
    <div className="posts">
      <PostsList content={resourcesPageInfo} />
    </div>
  );
}

const resourcesPageInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Curious to learn more?",
      subheader: "Here's a list of resources you can use to learn more!",
      bodyText: [
        {
          body: <p className="bold">Separate resources by case study here!</p>,
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - College Admissions",
      header: "Case Study #1: Auto College Admissions Scorer",
      headerLink: true,
      linkTo: "../college",
      subheader: "Social Media Targets Ads Through Demographics",
      bodyText: [
        {
          body: (
            <p>
              <a
                href="https://cockrell.utexas.edu/media/xt-adaptive-images/1600/images/wep-stats/HistoricalGrad.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                The University of Texas at Austin's Historical Enrollment Data
                of Women
              </a>
            </p>
          ),
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Facebook Advertising",
      header: "Case Study #2: Targeted Facebook Advertising",
      headerLink: true,
      linkTo: "../facebook",
      subheader: "Social Media Targets Ads Through Demographics",
      bodyText: [
        {
          body: (
            <p>
              <a
                href="https://arxiv.org/pdf/1904.02095"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research Study: "Discrimination through optimization: How
                Facebook’s ad delivery can lead to skewed outcomes"
              </a>
            </p>
          ),
        },
        {
          body: (
            <p>
              <a
                href="https://www.npr.org/sections/money/2014/10/21/357629765/when-women-stopped-coding"
                target="_blank"
                rel="noopener noreferrer"
              >
                NPR Podcast: "When Women Stopped Coding"
              </a>
            </p>
          ),
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - College Admissions",
      header: "Case Study #3: Facial Recognition",
      headerLink: true,
      linkTo: "../facialRecognition",
      subheader: "Facial Recognition Technology And Its Implications",
      bodyText: [
        {
          body: (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
      ],
    },
  },
];
