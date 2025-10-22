import React from "react";
import "../main.css";
import teachLogo from "../assets/teachla-logo.svg";
import PostsList from "./mainContent/PostsList";
import { VisibilityProvider } from "./mainContent/commonLogic";
export default function AboutUsPage() {
  return (
    <VisibilityProvider>
      <AboutUsPageContent />
    </VisibilityProvider>
  );
}

function AboutUsPageContent() {
  return (
    <div className="posts">
      <PostsList content={aboutUsInfo} />
    </div>
  );
}

const aboutUsInfo = [
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Profile Picture - TeacLA Logo",
      header: "Welcome To Bias By Us!",
      subheader: "It's not just humans that can be biased",
      bodyText: [
        {
          body: (
            <p className="bold">
              "Empowering students to understand technology — and how it impacts
              the world around them."
            </p>
          ),
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Teach LA Logo",
      header: "Who We Are",
      subheader: "About Teach LA",
      bodyText: [
        {
          body: (
            <p>
              Teach LA is a student-run organization at UCLA dedicated to making
              computer science education accessible, engaging, and inclusive for
              all.
            </p>
          ),
        },
        {
          body: (
            <p>
              We believe that computer science isn't just about coding — it's
              about creativity, collaboration, and understanding the technology
              that shapes our everyday lives.
            </p>
          ),
        },
        {
          body: (
            <p>
              Through free lessons, interactive projects, and community
              outreach, our members design and teach programming content to K–12
              students and beyond.
            </p>
          ),
        },
        {
          body: (
            <p>
              Our mission is simple: to help everyone, regardless of background,
              learn how to think critically about technology and use it to make
              a positive impact.
            </p>
          ),
        },
      ],
    },
  },
  {
    post: {
      profilePic: teachLogo,
      profilePicName: "Teach LA Logo",
      header: "What Are Learning Labs?",
      subheader: "Interactive Education, Made Fun",
      bodyText: [
        {
          body: (
            <p>
              Learning Labs are interactive educational experiences designed and
              built by Teach LA members.
            </p>
          ),
        },
        {
          body: (
            <p>
              Each lab turns a complex or abstract computer science topic into
              something you can <em>see</em>, <em>play with</em>, and{" "}
              <em>understand</em> hands-on.
            </p>
          ),
        },
        {
          body: (
            <p>
              From exploring the logic behind artificial intelligence to
              understanding bias in algorithms, our labs invite you to
              experiment, learn, and reflect on how technology connects to the
              real world.
            </p>
          ),
        },
        {
          body: (
            <p>
              Whether you're a beginner or an experienced coder, Learning Labs
              are here to spark curiosity and deepen understanding — one
              interactive lesson at a time.
            </p>
          ),
        },
      ],
    },
  },
];
