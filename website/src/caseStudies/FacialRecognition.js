import React from "react";
import "../main.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "../components/mainContent/PostsList";
import CounterFrame from "../components/posts/FacialRecognition/CounterFrame";
import { VisibilityProvider } from "../components/mainContent/commonLogic";

export default function FacialRecognition() {
  return (
    <VisibilityProvider>
      <FacialRecognitionContent />
    </VisibilityProvider>
  );
}

function FacialRecognitionContent() {
  return (
    <div className="posts">
      <PostsList content={FacialRecognitionInfo} />
    </div>
  );
}

const FacialRecognitionInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeachLA Logo",
      header: "Case Study #3: Face Recognition",
      subheader: "Stay Tuned For More!",
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
      profilePicName: "Profile Picture - Frame 1",
      header: "Facial Recognition Game",
      subheader: "Understanding Bias Through Categorization",
      bodyText: [
        {
          body: <CounterFrame />,
        },
      ],
    },
  },

  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Frame 2",
      header: "Frame 2",
      subheader: "Why Is This Important?",
      bodyText: [
        {
          body: (
            <p className="bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          body: (
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">{`TODO: `} </mark>Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          ),
        },
      ],
    },
  },

  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Frame 4",
      header: "Frame 4",
      subheader: "Why Is This Important?",
      bodyText: [
        {
          body: (
            <p className="bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          body: (
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">{`TODO: `} </mark>Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
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
          question:
            "What are some privacy concerns that can arise with the increased use in facial recognition technology? What are some ways that such technology can help improve safety? Compare and contrast.",
          answers: [
            <p>
              blah
              <mark className="bold">blah</mark> blah
            </p>,
          ],
        },
      ],
    },
  },

  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Frame 5",
      header: "Frame 5",
      subheader: "Why Is This Important?",
      bodyText: [
        {
          body: (
            <p className="bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          body: (
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">{`TODO: `} </mark>Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
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
          questionHeader: "Reflection Question 2:",
          question:
            "In what ways can we reduce the bias present in facial recognition technology? Remember where such biases originate from.",
          answers: [
            <p>
              blah
              <mark className="bold">blah</mark> blah
            </p>,
          ],
        },
      ],
    },
  },

  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Frame 6",
      header: "Frame 6",
      subheader: "Why Is This Important?",
      bodyText: [
        {
          body: (
            <p className="bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          body: (
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">{`TODO: `} </mark>Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
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
          questionHeader: "Reflection Question 3:",
          question:
            "What legal frameworks, standards, and guidelines are needed to safeguard individual rights and hold organizations accountable for the ethical use of facial recognition technology?",
          answers: [
            <p>
              blah
              <mark className="bold">blah</mark> blah
            </p>,
          ],
        },
      ],
    },
  },

  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - Conclusion",
      header: "Conclusion",
      headerLink: true,
      linkTo: "conclusion",
      subheader: "Why Is This Important?",
      bodyText: [
        {
          body: (
            <p className="bold">
              The Consequences of Bias in Facial Recognition
            </p>
          ),
        },
        {
          body: (
            <p>
              Facial recognition technology has repeatedly been shown to exhibit
              various biases against certain groups, leading to real-world
              consequences such as wrongful identification of suspects or
              determining healthcare. To address these issues, researchers are
              actively working on debiasing facial recognition models as well as
              the data sets they rely on. This involves creating more balanced
              training data and adjusting algorithms so they learn to make
              accurate predictions.
            </p>
          ),
        },
        {
          body: <p></p>,
        },
      ],
    },
  },
];
