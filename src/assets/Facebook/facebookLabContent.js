/*labContent can be represented as an array of objects. Each one will be a post or followup.
Eventually, if we run into issues with loading the visuals/interactive portions into the post array,
then they will be their own seperate part inbetween posts and the followups.
*/
import React from "react";
import "./facebookLabContent.css";
import { SocialMediaSection } from "../../components/posts/Facebook/socialMedia/socialMediaHandler";
import ConclusionGraphic from "../../components/posts/Facebook/conclusion/ConclusionGraphic.js";
import GenderGraphContainer from "../../components/posts/Facebook/genderGraph/GenderGraphContainer.js";
import facebookLogo from "./facebookLogo.svg";
import adPic from "./adPic.png";
import loopPic from "./loopPic.svg";
import trendsPic from "./trends.svg";
import facebookAds from "./personalizedAds.svg";
import anime from "./animationpic.svg";

export default [
  {
    post: {
      profilePic: facebookLogo,
      profilePicName: "Profile Picture - Facebook logo",
      header: "Introduction",
      subheader: "What did Facebook do?",
      bodyText: [
        {
          body: (
            <p>
              In 2019, the U.S. Department of Housing and Urban development sued
              Facebook for steering ads toward subsets of its population through
              an automated image classification mechanism.
            </p>
          ),
        },
        {
          body: (
            <p>
              While such ad-targeting is common practice, Facebook was sued for
              its ad-targeting machine learning algorithm because it had{" "}
              <mark className="underline">
                targeted or blocked users from specific ads on the basis of
                race, gender, and income.
              </mark>
            </p>
          ),
        },
        {
          body: (
            <p className="bold">
              In this case study, we will explore how such stereotypes were
              incorporated into Facebook’s algorithm and how such advertising
              could potentially create large impacts on our society.
            </p>
          ),
        },
      ],
    },
  },
  {
    post: {
      profilePic: adPic,
      profilePicName: "Profile Picture - Online Advertisement Logo",
      header: "The Ads Different Types of Users Receive",
      subheader:
        "How do the appearance of ads differ across individual accounts?",
      bodyText: [
        {
          body: (
            <p>
              Computer programs{" "}
              <mark className="yellow highlight">categorize</mark> users based
              on their demographical characteristics in order to optimize
              efficiency in many things, including advertising. Through such
              categorizations, advertisers are able to{" "}
              <mark className="underline">
                maximize the relevancy of their ads and thus maximize their
                profit.
              </mark>
            </p>
          ),
        },
        {
          body: (
            <p>
              Let's say you decided to create a profile on a social media app
              that displays advertisements "catered" to your preferences.{" "}
              <mark className="bold">
                How does changing your profile affect the ads that you receive?
              </mark>
            </p>
          ),
        },
        {
          body: (
            <p className="gray-text">
              The options for gender and race here are binary
              because this activity is based on the data from a{" "}
              <a
                href="https://arxiv.org/pdf/1904.02095.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                research study
              </a>{" "}
              that only considers these four criteria in order to simplify their
              experimental process. Teach LA recognizes that race and gender are{" "}
              <mark className="italic gray-text">not</mark> binary, and that it
              is crucial for algorithms to be inclusive of all identities!{" "}
            </p>
          ),
        },
        {
          body: <SocialMediaSection />,
        },
        {
          body: (
            <p>
              As you can see, the ads you receive{" "}
              <mark className="yellow highlight">change</mark> depending on your
              race and gender.
            </p>
          ),
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: adPic,
      profilePicName: "Profile Picture - Online Advertisement Logo",
      followups: [
        {
          questionHeader: "Reflection Question 1:",
          question:
            "What are the pros and cons of personalizing ads in this way?",
          answers: [
            <p>
              <mark className="bold">
                In some cases, personalizing ads is beneficial.
              </mark>{" "}
              For example, sports fans would be more likely to buy merch for the
              team(s) they root for as opposed to any random team.
            </p>,
            <p>
              <mark className="bold">
                In other cases, personalizing ads will promote unfairness.
              </mark>{" "}
              For example, if the algorithm observes that men are more likely to
              respond to software engineer roles, a female software engineer
              would be much less likely to encounter ads related to her career.
            </p>,
          ],
        },
        {
          questionHeader: "Reflection Question 2:",
          question:
            "Would you prefer to have ads relevant to you and your interests or have ads that cover a diverse list of interests?",
          answers: [],
        },
        {
          questionHeader: "Reflection Question 3:",
          question:
            "How does discrimination law justify or limit the personalization of ads?",
          answers: [
            <p>
              According to law,{" "}
              <mark className="yellow highlight">discrimination</mark> is
              defined as the treatment, consideration, or distinction in favor
              of or against a person based on the group or class that they
              belong to rather than on individual merit.
            </p>,
            <p>
              <mark className="yellow highlight">
                Legally protected classes
              </mark>{" "}
              include race, color, sex, religion, national origin, citizenship,
              age, pregnancy, familial status, disability status, veteran
              status, and genetic information.
            </p>,
            <p>
              <mark className="bold">
                Discrimination law is not only limited to the final decision
                made (i.e. hiring decision) but also extend to marketing and
                advertising.
              </mark>{" "}
              If advertising only to a certain demographic can{" "}
              <mark className="underline">
                affect other groups’ access to opportunities that affect their
                life chances
              </mark>{" "}
              (such as their job, money, house, education, or health), then that
              action is considered discriminatory.
            </p>,
          ],
        },
      ],
    },
  },
  {
    post: {
      profilePic: loopPic,
      profilePicName: "Profile Picture - A Circular Loop",
      header: "Feedback Loops Caused by Correlations within Data",
      subheader:
        "How do algorithms respond to stereotypical trends within data?",
      bodyText: [
        {
          body: (
            <p>
              The difference in ads shown across demographics is caused by the
              algorithm being trained on a{" "}
              <mark className="red highlight">skewed sample</mark> that reflects
              our society's biases. Much of the{" "}
              <mark className="italic">correlations</mark> it notices between
              race/gender and jobs have little to no actual{" "}
              <mark className="italic">causal relationsip</mark>, i.e. the kind
              of job a person looks for does not depend on their race or gender.
              However, a machine learning algorithm cannot tell when a trend it
              notices is correlation or causation, so it incorporates every
              trend it sees into its calculations for showing its users the most
              "optimal" ads.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">
                What happens when the algorithm begins showing different types
                of ads to different demographics?
              </mark>
            </p>
          ),
        },
        {
          body: (
            <img
              style={{ maxWidth: "680px", width: "75vw" }}
              src={anime}
              alt="a static design of the animation that visualizes how skewed samples amplify biases"
            ></img>
          ), // we will remove this once we implement the animation
        },
        {
          body: (
            <p>
              As shown in the animation above, the type of ads users initially
              receive only vary slightly. However, as time passes, these
              differences are <mark className="red highlight">amplified</mark>{" "}
              as users <mark className="italic">only</mark> get to interact with
              the ads they see. The algorithm recognizes this as positive
              feedback, and adjusts its parameters to show similar ads in the
              future - when in reality, the user may be more interested in
              another type of ad that they have yet to receive!
            </p>
          ),
        },
        {
          body: (
            <p>
              This process of amplifying trends is a{" "}
              <mark className="red highlight">positive feedback loop</mark> that
              compounds initial bias over time.
            </p>
          ),
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: loopPic,
      profilePicName: "Profile Picture - A Circular Loop",
      followups: [
        {
          questionHeader: "Reflection Question 1:",
          question:
            "What is an example of a difference between correlation vs causation?",
          answers: [
            <p>
              One widely discussed example is the{" "}
              <mark className="bold">
                strong positive correlation between ice cream sales and homicide
                rates
              </mark>
              . Clearly, ice cream doesn't cause people to commit violent crime!
              Instead, the correlation comes from the fact that ice cream sales
              and crime rates both rise in the summer due to the hot weather.
            </p>,
          ],
        },
        {
          questionHeader: "Reflection Question 2:",
          question:
            "Why do we want to avoid positive feedback loops in advertising, especially for job and housing ads?",
          answers: [
            <p>
              <mark className="underline">
                Here is a situation we want to avoid:
              </mark>{" "}
              Let’s say the algorithm observes from data that people of color
              (POC) tend to buy cheaper homes on average than non-POC. It then
              advertises cheaper listings to POC and more expensive listings to
              non-POC in order to maximize ad views.
            </p>,
            <p>
              Naturally, the cheaper housing ads gain more traction by POC
              accounts simply because that is all they were exposed to. However,
              the algorithm comes to believe that POC prefer cheaper homes and
              continues to advertise more and more cheap listings. Because of
              this,{" "}
              <mark className="bold">
                POC would gain less and less opportunities to buy a more
                expensive house, worsening the initial disparity in housing
                choices that was observed from the data.
              </mark>
            </p>,
          ],
        },
      ],
    },
  },
  {
    post: {
      profilePic: trendsPic,
      profilePicName: "Profile Picture - arrows indicating upward trend",
      header: "The Influence of Targeted Advertising on Societal Trends",
      subheader:
        "How deep do the effect of advertisements run in society itself?",
      bodyText: [
        {
          body: (
            <p className="text-center">
              <mark className="bold">
                Percentage of Women Enrolled in Computer Science Degrees from
                1960s to Present
              </mark>
            </p>
          ),
        },
        {
          body: <GenderGraphContainer />,
        },
        {
          body: (
            <p className="gray-text text-center">
              Source:{" "}
              <a
                href="https://www.npr.org/sections/money/2014/10/21/357629765/when-women-stopped-coding"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                NPR - When Women Stopped Coding
              </a>
            </p>
          ),
        },
        {
          body: <p>Did you notice the sudden drop in females?</p>,
        },
        {
          body: (
            <p>
              While the percentage of women in CS rose in the 80s thanks to the
              boom of nerd culture, women enrolled in CS degrees at the time
              found that their male peers had come into college with much
              greater familiarity and prior experience with computers than they
              did. This was due to the fact that{" "}
              <mark className="underline">
                personal computers were advertised almost exclusively to men in
                the 70s, influencing families to buy computers for boys than
                girls.
              </mark>
            </p>
          ),
        },
        {
          body: (
            <p>
              Despite numerous efforts to lower the gender disparity in tech
              today, the current distribution has a long way to go until we can
              erase the{" "}
              <mark className="bold">
                severe <mark className="green highlight">impact</mark> of past
                advertisements.
              </mark>
            </p>
          ),
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: trendsPic,
      profilePicName: "Profile Picture - arrows indicating upward trend",
      followups: [
        {
          questionHeader: "Reflection Question 1:",
          question:
            "How might ads affect how people perceive themselves and each other in society?",
          answers: [],
        },
        {
          questionHeader: "Reflection Question 2:",
          question:
            "What are some other harmful effects of stereotypes at play currently?",
          answers: [],
        },
      ],
    },
  },
  {
    post: {
      profilePic: facebookAds,
      profilePicName: "Profile Picture - Facebook and its ads",
      header: "Conclusion",
      subheader: "How should we fix this problem?",
      bodyText: [
        {
          body: (
            <p>
              While using targeted advertisements can be effective in helping
              people find things related to their interests, the criteria used
              to "optimize" these ads may lead to discriminatory advertising and
              further impose stereotypes.
            </p>
          ),
        },
        {
          body: (
            <p>
              <mark className="bold">
                Here are three ways that Facebook is addressing this issue:
              </mark>
            </p>
          ),
        },
        {
          body: <ConclusionGraphic />,
        },
        {
          body: (
            <p>
              In the future, Facebook and other advertising platforms could also
              incorporate state-of-the-art machine learning{" "}
              <mark className="blue highlight">debiasing</mark> methods to
              further prevent their algorithms from becoming discriminatory.
            </p>
          ),
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: facebookAds,
      profilePicName: "Profile Picture - Facebook and its ads",
      followups: [
        {
          questionHeader: "Links to sources:",
          question: "Where can I find additional information on this topic?",
          answers: [
            <a
              href="https://www.technologyreview.com/2019/04/05/1175/facebook-algorithm-discriminates-ai-bias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT Technology Review article - Facebook's ad-serving algorithm
              discriminates by gender and race
            </a>,
            <a
              href="https://arxiv.org/pdf/1904.02095.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research Paper - Discrimination through optimization: How
              Facebook's ad delivery can lead to skewed outcomes
            </a>,
            <a
              href="https://www.npr.org/sections/money/2014/10/21/357629765/when-women-stopped-coding"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPR - When Women Stopped Coding
            </a>,
            <a
              href="https://www.computerscience.org/resources/women-in-computer-science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Statistics on Women in Computer Science
            </a>,
          ],
        },
      ],
    },
  },
];
