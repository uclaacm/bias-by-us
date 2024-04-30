import teachLogo from "../teachla-logo.svg";
import React from "react";
import "../../main.css";
import EssayContainer from "../../components/posts/CollegeAdmissions/essay/EssayContainer";
export default [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Introduction",
      subheader: "What did the University of Texas at Austin Do?",
      bodyText: [
        {
          body: (
            <p>
              <p>
                In 2013, the CS department at University of Texas at Austin
                implemented the GRADE (GRaduate ADmissions Evaluator) machine
                learning system into its Ph.D admissions process.
              </p>
              <br />
              <p>
                {" "}
                Made to reflect the admissions committee’s decisions prior to
                its implementation in 2013, issues arose of it compounding the
                initial biases that admissions committee held, which
                disadvantaged applicants from underrepresented groups. The
                department ultimately abandoned GRADE in 2020.
              </p>
              <br />
              <p className="bold">
                In this case study, we will analyze why and how ML models such
                as GRADE that screen various applications can undervalue the
                achievements of underrepresented groups.
              </p>
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
