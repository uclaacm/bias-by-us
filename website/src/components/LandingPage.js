import React from "react";
import "../main.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";
import { VisibilityProvider } from "./mainContent/commonLogic";

export default function LandingPage() {
  return (
    <VisibilityProvider>
      <LandingPageContent />
    </VisibilityProvider>
  );
}

function LandingPageContent() {
  return (
    <div className="posts">
      <PostsList content={landingPageInfo} />
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
              {" "}
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
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - College Admissions",
      header: "Case Study #1: Auto College Admissions Scorer",
      headerLink: true,
      linkTo: "/college",
      subheader: "Social Media Targets Ads Through Demographics",
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
      profilePicName: "Profile Picture - Facebook Advertising",
      header: "Case Study #2: Targeted Facebook Advertising",
      headerLink: true,
      linkTo: "/facebook",
      subheader: "Social Media Targets Ads Through Demographics",
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
      profilePicName: "Profile Picture - College Admissions",
      header: "Case Study #3: Facial Recognition",
      headerLink: true,
      linkTo: "facialRecognition",
      subheader: "Facial Recognition Technology And Its Implications",
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
];
