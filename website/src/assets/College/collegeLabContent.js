import teachLogo from "../teachla-logo.svg";
import React from "react";
import "../../main.css";
import EssayContainer from "../../components/posts/CollegeAdmissions/essay/EssayContainer";
export default [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Case Study #1: College Admissions",
      subheader: "Robots Reading Your Essays?",
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
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Interactive Essay",
      subheader: "Make your own essay!",
      bodyText: [
        {
          body: <EssayContainer />,
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Facial Recognition",
      header: "Case Study #2: Facial Recognition",
      headerLink: true,
      linkTo: "facebook",
      subheader: "Social Media Targets Ads Through Demographics",
      bodyText: [
        {
          body: (
            <p className="bold">
              While using targeted advertisements can be effective in helping
              people find things related to their interests, the criteria used
              to "optimize" these ads may lead to discriminatory advertising and
              further impose stereotypes.
            </p>
          ),
        },
      ],
    },
  },
];
