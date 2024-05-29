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
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Facial Recognition",
      header: "Learning from Biased Decisions",
      headerLink: true,
      linkTo: "facebook",
      subheader: "What served as the source for bias in GRADE?",
      bodyText: [
        {
          body: (
            <p className="bold">
              While GRADE greatly reduced the admission office's workload, the
              ML model's decisions were problematic as they expressed heavy bias
              towards male applicants. This is because{" "}
              <u>
                the gender distribution in UT Austin's engineering department
                has been historically skewed towards men,
              </u>{" "}
              with less than a quarter of graduate students being women.{" "}
              <br></br> <br></br>
              These past decisions served as{" "}
              <mark className="blue highlight">tainted examples</mark> for the
              model's training dataset, since such decisions were{" "}
              <b>
                heavily affected by human bias and do not accurately represent
                an applicant's competence.{" "}
              </b>
            </p>
          ),
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: teachLogo,
      profilePicName: "Teach Logo",
      followups: [
        {
          questionHeader: "Reflection Question 1:",
          question: "In what other situations would we find tainted examples?",
          answers: [
            <p>
              If a model was taught to predict employee performance through past
              data of annual review scores, then what the actual model would do
              is predicting
              <mark className="bold">
                how the manager perceives employee performance rather than their
                actual performance.
              </mark>{" "}
              For example, sports fans would be more likely to buy merch for the
              team(s) they root for as opposed to any random team.
            </p>,
          ],
        },
      ],
    },
  },
];
