import teachLogo from "../teachla-logo.svg";
import React from "react";
import "../../main.css";
import EssayContainer from "../../components/posts/CollegeAdmissions/essay/EssayContainer";
import WomenEnrollmentContainer from "../../components/posts/CollegeAdmissions/enrollmentGraph/WomenEnrollmentContainer.js";
import { MatchingGame } from "./MatchingGame.js";

const content = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Introduction",
      subheader: "What did the University of Texas at Austin do?",
      bodyText: [
        {
          body: (
            <p>
              In 2013, the CS department at the University of Texas at Austin
              implemented the GRADE (GRaduate ADmissions Evaluator) machine
              learning system into its Ph.D. admissions process.
            </p>
          ),
        },
        {
          body: (
            <p>
              Made to reflect the admissions committee’s decisions prior to its
              implementation in 2013, issues arose of it{" "}
              <mark className="underline">
                compounding the initial biases that the admissions committee
                held, which disadvantaged applicants from underrepresented
                groups.
              </mark>{" "}
              The department ultimately abandoned GRADE in 2020.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">
                In this case study, we will analyze why and how ML models such
                as GRADE that screen various applications can undervalue the
                achievements of underrepresented groups.
              </mark>
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
      header: "Learning from Biased Decisions",
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
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Thinking Like an ML Model",
      header: "Thinking Like an ML Model",
      subheader:
        "Why did the model take factors unrelated to competence into account?",
      bodyText: [
        {
          body: (
            <>
              <p className="bold">
                The computer isn't really looking for gender. So why does it
                learn to take that into account without being told to do so?
                <br></br>
                <br></br>
                Here's an interactive example that emulates how machine learning
                models "learn".
                <br></br>
                <br></br>
                Grouping exercise!
                <br></br>
                Explain why you make mistakes.
                <br></br>
                Explain how that's similar to how ML models make mistakes.
              </p>
              <MatchingGame />
            </>
          ),
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Facebook Logo",
      header: "Case Study #2: Facebook Ads",
      headerLink: true,
      linkTo: "/facebook",
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

export default content;
