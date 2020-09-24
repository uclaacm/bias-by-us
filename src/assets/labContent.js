/*labContent can be represented as an array of objects. Each one will be a post or followup.
Eventually, if we run into issues with loading the visuals/interactive portions into the post array,
then they will be their own seperate part inbetween posts and the followups.
*/
import React from "react";
import PostHeader from "../components/posts/PostHeader.js";
import facebookLogo from "./facebookLogo.svg";
import classifyingPic from "./classifyingPeople.svg";
import adsPic from "./personalizedAds.svg";
export default [
  {
    post: {
      profilePic: facebookLogo,
      header: "Introduction To The Case Study",
      subheader: "What Did Facebook Do?",
      bodyText: [
        {
          body: `In 2019, the U.S. Department of Housing and Urban development sued Facebook for steering its ads toward different 
          subsets of the user population through an automated image classification mechanism.`,
        },
        {
          body: `As consumers, we are more likely to engage with advertisements that are relevant to our interests. 
          Knowing this, advertisers gear their ads towards certain demographics in the population in order 
          to maximize relevancy and profit. `,
        },
        {
          body: `While such ad-targeting is common practice, Facebook was sued for its ad-targeting machine learning algorithm because
          it had targeted or blocked users from specific ads on the basis of race, gender, and religion.`,
        },
        {
          body: `In this case study, we will explore how such stereotypes were incorporated into Facebook’s algorithm
          and how such advertising could potentially create large impacts on our society.`,
          bold: true,
        },
      ],
    },
  },
  {
    post: {
      header: "Classifying People",
      subheader: "Why do we divide people into groups?",
      profilePic: classifyingPic,
      bodyText: [
        {
          body: `No two people in the world are exactly alike. To more easily keep track of the diverse set of people
          we meet, our mind automatically groups and labels people based on easily identifiable features, such as their
           gender, race, and age.`,
        },
        { body: "INSERT VISUAL HERE", bold: true },
        {
          body: (
            <PostHeader
              profilePic={classifyingPic}
              header="Placeholder component of our animated visual here"
              subheader="Will be very fancy"
            />
          ),
        },
        {
          body: `It is our natural instict to form opinions about others when we first meet them, even if we barely know
          them at all. These first impressions, as well as our opinions on those who we are more familiar with, all 
          contribute to how we view and think of the group they belong to as a whole.`,
        },
        {
          body: `This leads to the creation of stereotypes, which are over-generalized beliefs about 
          a particular group of people.`,
          bold: true,
        },
        {
          body: `Stereotypes cause us to have preconceived notions about people solely based on their physical 
          characteristics, clouding us from making accurate and unbiased judgements about the individuals we meet.`,
        },
      ],
    },
  },
  {
    followups: [
      {
        question: `What are the first things that you notice about other people when you first see them?`,
      },
      {
        answerHeader: `Studies have shown that we immediately take note of one thing.`,
        answer: `We immediately try to figure out if someone is a threat to us, and we use facial features like 
        eye size, mouth shape, and more to distinguish friend from foe.`,
      },
      {
        question: `Are we born with stereotypes of others or are they something that we learn over time?`,
      },
    ],
  },
  {
    post: {
      profilePic: adsPic,
      header: "Stereotypes Within Personalized Advertising",
      subheader:
        "How do algorithms respond to stereotypical trends within data?",
      bodyText: [
        {
          body: `It’s not just us who categorize others based off of surface level information; computer 
          algorithms do it all the time to optimize efficiency in many things, including advertising.`,
        },
        {
          body: `By incorporating these categorizations into advertising algorithms, advertisers 
          are able to maximize the relevancy of their ads and thus maximize their profit. `,
        },
        {
          body: `How do the decisions made by such algorithms impact the type of ads that we receive on social media?`,
          bold: true,
        },
        {
          body: `Let’s say you decided to create a profile on a social media app that displays 
          advertisements “catered” to your preferences.`,
        },
        {
          body: `How does changing your profile affect the ads that you receive?`,
          bold: true,
        },
        { body: "INSERT INTERACTIVE PORTION HERE", bold: true },
        {
          body: (
            <PostHeader
              profilePic={adsPic}
              header="Placeholder of our interactive module here"
              subheader="Will be very fancy"
            />
          ),
        },
        {
          body: `As you can see, the ads you receive change depending on your race, gender, and age. `,
        },
      ],
    },
  },
  {
    followups: [
      {
        question:
          "What are the pros and cons of personalizing advertisements in this way?",
      },
      {
        answerHeader: `In some cases, personalizing ads is beneficial. `,
        answer: `For example, sports teams fans would probably want to buy merch for the teams that they
             are interested in as opposed to any random team, so personalization can help to give ads relevant to the user.`,
      },
      {
        answerHeader: `In other cases, personalizing ads will promote unfairness.`,
        answer: `For example, the ad personalization algorithm deemed
             men as more likely to respond to software engineer roles, so a female software engineer would be 
            much less likely to encounter advertisements related to her career.`,
      },
      {
        question: `Would you prefer to have ads relevant to you and your interests or 
            have ads that cover a diverse list of interests?
            `,
      },
      {
        question: `How does discrimination law justify or limit the 
            personalization of ads?`,
      },
      {
        answerHeader: `According to law, discrimination is defined as:`,
        answer: `the treatment, consideration, or distinction in favor of 
            or against a person based on the group or class that they belong to rather than on individual merit. 
           `,
      },
      {
        answerHeader: ` Legally protected classes include: `,
        answer: `race, color, sex, religion, national origin, citizenship, age, pregnancy, familial 
            status, disability status, veteran status, and genetic information.`,
      },
      {
        answerHeader: `Discrimination law is not only limited to the final decision made (i.e. a hiring decision) but also extend 
            to marketing and advertising.`,
        answer: `If advertising only to a certain demographic can affect other 
            groups’ access to opportunities that affect their life chances 
            (such as their job, money, house, education, or health), then that action is considered discriminatory.`,
      },
    ],
  },
];
