import teachLogo from "../teachla-logo.svg";
import React from "react";
import "../../main.css";
import EssayContainer from "../../components/posts/CollegeAdmissions/essay/EssayContainer.js";
import EnrollGraphContainer from "../../components/posts/CollegeAdmissions/GradEnroll/EnrollGraphContainer.js";
import WomenEnrollmentContainer from "../../components/posts/CollegeAdmissions/enrollmentGraph/WomenEnrollmentContainer.js";

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
      header: "Biases in Disguise",
      subheader: "How do biases implicitly manifest within data?",
      bodyText: [
        {
          body: (
            <p>
              The engineers of GRADE and other similar models{" "}
              <mark className="bold">
                remove labels for protected classes such as race and gender from
                the data altogether
              </mark>{" "}
              to prevent such attributes from being taken into account. Despite
              such explicit measures, these models may still end up biased.
            </p>
          ),
        },
        {
          body: <EssayContainer />,
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Historical - Grad Enrollment of Women",
      subheader:
        "Graph of percent of women in enrolled in engineering programs",
      bodyText: [
        {
          body: (
            <p className="text-center">
              <mark className="bold">
                Historical - Grad Enrollment of Women
              </mark>
            </p>
          ),
        },
        {
          body: <EnrollGraphContainer />,
        },
        {
          body: (
            <p className="gray-text text-center">
              Source:{" "}
              <a
                href="https://cockrell.utexas.edu/media/xt-adaptive-images/1600/images/wep-stats/HistoricalGrad.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                The University of Texas at Austin
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
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "enrollment graph",
      subheader: "amazing graph",
      bodyText: [
        {
          body: (
            <p className="text-center">
              <mark className="bold">
                Historical - Grad Enrollment of Women
              </mark>
            </p>
          ),
        },
        {
          body: <WomenEnrollmentContainer />,
        },
        {
          body: (
            <p className="gray-text text-center">
              Source:{" "}
              <a
                href="https://cockrell.utexas.edu/media/xt-adaptive-images/1600/images/wep-stats/HistoricalGrad.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                The University of Texas at Austin
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
