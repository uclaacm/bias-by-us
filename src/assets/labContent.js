/*labContent can be represented as an array of objects. Each one will be a post or followup.
Eventually, if we run into issues with loading the visuals/interactive portions into the post array,
then they will be their own seperate part inbetween posts and the followups.
*/
import React from "react";
import PlaceholderInteractive from "../components/posts/PlaceholderInteractive.js";
import StereotypeActivity from "../components/mainContent/StereotypeActivity.js";
import ConclusionGraphic from "../components/posts/ConclusionGraphic.js";
import facebookLogo from "./facebookLogo.svg";
import classifyingPic from "./classifyingPeople.svg";
import stereotypesPic from "./stereotypes.svg";
import adsPic from "./personalizedAds.svg";
import trendsPic from "./trends.svg";
import insightPic from "./insight.svg";
export default [
  {
    post: {
      profilePic: facebookLogo,
      profilePicName: "Profile Picture - Facebook logo",
      header: "Introduction",
      subheader: "What did Facebook do?",
      bodyText: [
        {
          body: `In 2019, the U.S. Department of Housing and Urban development sued Facebook for steering ads toward subsets of the population through an automated image classification mechanism.`
        },
        {
          body: `Consumers are more likely to engage with advertisements relevant to their interests. Therefore, advertisers gear ads towards certain demographics in order to maximize relevancy and profit.`
        },
        {
          body: `While such ad-targeting is common practice, Facebook was sued for its ad-targeting machine learning algorithm because it had targeted or blocked users from specific ads on the basis of race, gender, and income.`
        },
        {
          body: `In this case study, we will explore how such stereotypes were incorporated into Facebook’s algorithm and how such advertising could potentially create large impacts on our society.`,
          bold: true,
        },
      ],
    },
  },
  {
    post: {
      header: "Classifying People",
      subheader: "Why do we, as humans, divide one another into groups?",
      profilePic: classifyingPic,
      profilePicName: "Profile Picutre - a circle of people",
      bodyText: [
        {
          body: `No two people in the world are exactly alike.`
        },
        {
          body: `To keep track of the diverse set of people we meet, our mind automatically groups and labels people based on easily identifiable features, such as their gender, race, and age.`
        },
        {
          body: <PlaceholderInteractive />
        },
        {
          body: `It is our natural instict to form opinions about others when we first meet them, even if we barely know them. These first impressions, as well as our opinions on those we are more familiar with, all contribute to how we view the groups they belong to.`
        },
        {
          body: `This leads to stereotypes – generalized beliefs about a particular groups of people.`, 
          bold: true
        },
        {
          body: `Stereotypes cause us to have preconceived notions about people solely based on their appearance, clouding us from making accurate and unbiased judgements about the individuals we meet.`
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: classifyingPic,
      profilePicName: "Profile Picture - a circle of people",
      followups: [
        {
          questionHeader: `Reflection Question 1:`,
          question: `What are some things that you notice about other people when you meet them for the first time?`,
          answers: [
            <text>Studies show that we take note of one thing: we immediately try to figure out if someone is a threat to us, and we analyze their facial features to distinguish friend from foe.</text>
          ]
        },
        {
          questionHeader: `Reflection Question 2:`,
          question: `Are we born with stereotypes of others, or are they something we learn over time?`,
          answers: []
        },
      ],
    }
  },
  
  {
    post: {
      header: "The Implicit Biases We Hold",
      subheader: "What exepctations and preconceptions do we hold for different groups of people?",
      profilePic: stereotypesPic,
      profilePicName: "Profile Picture - man with thought bubble",
      bodyText: [
        {
          body: `From a young age, we begin forming implicit biases by picking up on patterns in our world and try to fit people into the molds we create in our heads.`
        },
        {
          body: <StereotypeActivity />
        },
        {
          body: `*While there exists a spectrum of gender identity, it is practically impossible for a machine learning algorithm to differentiate between so many classifications. Because of this, datasets for machine learning algorithms generally only classify gender into two groups: male and female.`, 
          gray: true
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: stereotypesPic,
      profilePicName: "Profile Picture - man with thought bubble",
      followups: [
        {
          questionHeader: `Reflection Question 1:`,
          question: `What was running through your mind when you were trying to classify people by what job they have?`,
          answers: []
        },
        {
          questionHeader: `Reflection Question 2:`,
          question: `What causes us to have these unconscious perceptions of other people? Experience, the media, etc?`,
          answers: []
        },
      ],
    }
  },
  {
    post: {
      profilePic: adsPic,
      profilePicName: "Profile Picture - Facebook and its users",
      header: "Stereotypes Within Personalized Advertising",
      subheader: "How do algorithms respond to stereotypical trends within data?",
      bodyText: [
        {
          body: `It’s not just us who categorize others based off of surface level information; computer algorithms do it all the time to optimize efficiency in many things, including advertising. By incorporating these categorizations into advertising algorithms, advertisers are able to maximize the relevancy of their ads and thus maximize their profit.`
        },
        {
          body: `How do the decisions made by such algorithms impact the type of ads that we receive on social media?`,
          bold: true
        },
        {
          body: `Let's say you decided to create a profile on a social media app that displays advertisements "catered" to your preferences. How does changing your profile affect the ads that you receive?`
        },
        {
          body: <PlaceholderInteractive />
        },
        {
          body: `As you can see, the ads you receive change depending on your race, gender, and age. `
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: adsPic,
      profilePicName: "Profile Picture - Facebook and its users",
      followups: [
        {
          questionHeader: `Reflection Question 1:`,
          question: `What are the pros and cons of personalizing ads in this way?`,
          answers: [
            <text><b>In some cases, personalizing ads is beneficial.</b> For example, sports teams fans would probably want to buy merch for the teams that they are interested in as opposed to any random team, so personalization can help to give ads relevant to the user.</text>,
            <text><b>In other cases, personalizing ads will promote unfairness.</b> For example, if the optimized algorithm observes that men are more likely to respond to software engineer roles, a femaile software engineer would be much less likely to encounter advertisements related to her career.</text>
          ]
        },
        {
          questionHeader: `Reflection Question 2:`,
          question: `Would you prefer to have ads relevant to you and your interests or have ads that cover a diverse list of interests?`,
          answers: []
        },
        {
          questionHeader: `Reflection Question 3:`,
          question: `How does discrimination law justify or limit the personalization of ads?`,
          answers: [
            <text>According to law, <b>discrimination</b> is defined as the treatment, consideration, or distinction in favor of or against a person based on the group or class that they belong to rather than on individual merit.</text>,
            <text><b>Legally protected classes</b> include race, color, sex, religion, national origin, citizenship, age, pregnancy, familial status, disability status, veteran status, and genetic information.</text>,
            <text><b>Discrimination law is not only limited to the final decision made (i.e) hiring decision) but also extend to marketing and advertising.</b> If advertising only to a certain demographic can <b>affect other groups’ access to opportunities that affect their life chances</b> (such as their job, money, house, education, or health), then that action is considered discriminatory</text>
          ]
        },
      ],
    }
  },
  {
    post: {
      profilePic: trendsPic,
      profilePicName: "Profile Picture - arrows indicating upward trend",
      header: "The Influence of Targeted Advertising on Societal Trends",
      subheader: "How deep do the effect of advertisements run in society itself?",
      bodyText: [
        {
          body: `Here is a graph displaying the gender distribution of computer scientists from the 1960s to now.`
        },
        {
          body: <PlaceholderInteractive />
        },
        {
          body: `Did you notice the sudden drop in females? This was caused by advertisements geared towards the male-dominated nerd culture of the 80s.`
        },
        {
          body: `At the time, "nerdy" interests such as video games and computers were commonly viewed as interests that women did not want to participate in. Advertisements transferred that misconception to its viewers, causing women to feel alienated from those activities.`
        },
        {
          body: `The results can be seen in the graph: advertisements had turned the misconception into an unfortunate reality.`, 
          bold: true
        },
        {
          body: `Despite numerous efforts to lower the gender disparity in tech today, the current distribution has a long way to go until we can erase the sever impact of past advertisements.`
        },
        {
          body:`This is one of the many ways in which advertisements may gradually worsen preconceived notions about what is associated with groups of people.`,
          bold: true
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
          questionHeader: `Reflection Question 1:`,
          question: `What causes advertising algorithms to learn and spread biases?`,
          answers: [
            <text>The data that the algorithm was trained on may be a <b>skewed sample</b> that reflects our society's biases. Training on such data will cause a <b>feedback loop</b>, which compounds the initial bias over time.</text>,
            <text><b>Here's how it works:</b> The algorithm observes from the data that people of color (POC) tend to buy cheaper homes on average than non-POC. It then advertises cheaper listings to POC and more expensive listings to non-POC in order to maximize ad views. Naturally, the cheaper housing ads gain more traction by POC accounts simply because that is all they were exposed to. However, the algorithm comes to believe that POC prefer cheaper homes and continues to advertise more and more cheap listings. Because of this, <b>POC would gain less and less opportunities to buy a more expensive house, worsening the initial disparity in housing choices that was observed from the data.</b></text>
          ]
        },
        {
          questionHeader: `Reflection Question 2:`,
          question: `How might ads affect how people perceive themselves and each other in society?`,
          answers: []
        },
        {
          questionHeader: `Reflection Question 3:`,
          question: `What are some other harmful effects of stereotypes at play currently?`,
          answers: []
        },
      ],
    }
  },
  {
    post: {
      profilePic: insightPic,
      profilePicName: "Profile Picture - lightbulb",
      header: "Conclusion",
      subheader: "How should we fix this problem?",
      bodyText: [
        {
          body: `While using targeted advertisements can be effective in helping people find things related to their interests, the criteria used to "optimize" these ads may lead to discriminatory advertising and further impose stereotypes.`
        },
        {
          body: `Here are three ways that Facebook is addressing this issue:`, 
          bold: true
        },
        {
          body: <ConclusionGraphic />
        },
      ],
    },
  },
  {
    commentSection: {
      profilePic: insightPic,
      profilePicName: "Profile Picture - lightbulb",
      followups: [
        {
          questionHeader: `Links to sources:`,
          question: `Where can I find additional information on this topic?`,
          answers: [
            <a href='https://www.technologyreview.com/2019/04/05/1175/facebook-algorithm-discriminates-ai-bias/'>MIT Technology Review article - Facebook's ad-serving algorithm discriminates by gender and race</a>,
            <a href='https://arxiv.org/pdf/1904.02095.pdf'>Research Paper - Discrimination through optimization: How Facebook's ad delivery can lead to skewed outcomes</a>
          ]
        },
      ],
    }
  },
];
