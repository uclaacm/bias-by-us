/*labContent can be represented as an array of objects. Each one will be a post or followup.
Eventually, if we run into issues with loading the visuals/interactive portions into the post array,
then they will be their own seperate part inbetween posts and the followups.
*/
import React from "react";
import PlaceholderInteractive from "../components/posts/PlaceholderInteractive.js";
import SocialMediaContainer from "../components/socialMedia/SocialMediaContainer";
import ConclusionGraphic from "../components/posts/ConclusionGraphic.js";
import facebookLogo from "./facebookLogo.svg";
import adPic from "./adPic.png";
import loopPic from "./loopPic.svg";
import trendsPic from "./trends.svg";
import facebookAds from "./personalizedAds.svg";

export default [
  {
    post: {
      profilePic: facebookLogo,
      profilePicName: "Profile Picture - Facebook logo",
      header: "Introduction",
      subheader: "What did Facebook do?",
      bodyText: [
        {
          body: `In 2019, the U.S. Department of Housing and Urban development sued Facebook for steering ads toward subsets of its population through an automated image classification mechanism.`
        },
        {
          body: <text>While such ad-targeting is common practice, Facebook was sued for its ad-targeting machine learning algorithm because it had <u>targeted or blocked users from specific ads on the basis of race, gender, and income.</u></text>
        },
        {
          body: <text><b>In this case study, we will explore how such stereotypes were incorporated into Facebook’s algorithm and how such advertising could potentially create large impacts on our society.</b></text>
        }, 
      ],
    },
  },
  {
    post: {
      profilePic: adPic,
      profilePicName: "Profile Picture - Online Advertisement Logo",
      header: "The Ads Different Types of Users Receive",
      subheader: "How do the appearance of ads differ across individual accounts?",
      bodyText: [
        {
          body: <text>Computer programs <mark style={{backgroundColor: '#ffedbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>categorize</mark> users based on their demographical characteristics in order to optimize efficiency in many things, including advertising. Through such categorizations, advertisers are able to <u>maximize the relevancy of their ads and thus maximize their profit.</u></text>
        },
        {
          body: <text>Let's say you decided to create a profile on a social media app that displays advertisements "catered" to your preferences. <b>How does changing your profile affect the ads that you receive?</b></text>
        },
        {
          body:<text style={{color:'gray'}}>Why are the options for gender and race binary, you ask? That's because this activity is based on the data from a <a href='https://arxiv.org/pdf/1904.02095.pdf' target="_blank" rel="noopener noreferrer">research study</a> that only considers these four criteria in order to simplify their experimental process. Teach LA recognizes that race and gender are <i>not</i> binary, and that it is crucial for algorithms to be inclusive of all identities! </text>
        },
        {
          body: <SocialMediaContainer />
        },
        {
          body: <text>As you can see, the ads you receive <mark style={{backgroundColor: '#ffedbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>change</mark> depending on your race and gender.</text>
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
          questionHeader: `Reflection Question 1:`,
          question: `What are the pros and cons of personalizing ads in this way?`,
          answers: [
            <text>
              <b>In some cases, personalizing ads is beneficial.</b> For example, sports fans would be more likely to buy merch for the team(s) they root for as opposed to any random team.
            </text>,
            <text>
              <b>In other cases, personalizing ads will promote unfairness.</b> For example, if the algorithm observes that men are more likely to respond to software engineer roles, a female software engineer would be much less likely to encounter ads related to her career.
            </text>
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
            <text>
              According to law, <mark style={{backgroundColor: '#ffedbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>discrimination</mark> is defined as the treatment, consideration, or distinction in favor of or against a person based on the group or class that they belong to rather than on individual merit.
            </text>,
            <text>
              <mark style={{backgroundColor: '#ffedbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>Legally protected classes</mark> include race, color, sex, religion, national origin, citizenship, age, pregnancy, familial status, disability status, veteran status, and genetic information.
            </text>,
            <text>
              <b>Discrimination law is not only limited to the final decision made (i.e. hiring decision) but also extend to marketing and advertising.</b> If advertising only to a certain demographic can <u>affect other groups’ access to opportunities that affect their life chances</u> (such as their job, money, house, education, or health), then that action is considered discriminatory
            </text>
          ]
        },
      ],
    }
  },
  {
    post: {
      profilePic: loopPic,
      profilePicName: "Profile Picture - A Circular Loop",
      header: "Feedback Loops Caused by Correlations within Data",
      subheader: "How do algorithms respond to stereotypical trends within data?",
      bodyText: [
        {
          body: <text>The difference in ads shown across demographics is caused by the algorithm being trained on a <mark style={{backgroundColor: '#ffbdbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>skewed sample</mark> that reflects our society's biases. Much of the <i>correlations</i> it notices between race/gender and jobs have little to no actual <i>causal relationsip</i>, i.e. the kind of job a person looks for does not depend on their race or gender. However, a machine learning algorithm cannot tell when a trend it notices is correlation or causation, so it incorporates every trend it sees into its calculations for showing its users the most "optimal" ads.</text>
        },
        {
          body: <text><b>What happens when the algorithm begins showing different types of ads to different demographics?</b></text>
        },
        {
          body: <PlaceholderInteractive />
        },
        {
          body: <text>As shown in the animation above, the type of ads users initially receive only vary slightly. However, as time passes, these differences are <mark style={{backgroundColor: '#ffbdbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>amplified</mark> as users <i>only</i> get to interact with the ads they see. The algorithm recognizes this as positive feedback, and adjusts its parameters to show similar ads in the future - when in reality, the user may be more interested in another type of ad that they have yet to receive!</text>
        },
        {
          body: <text>This process of amplifying trends is a <mark style={{backgroundColor: '#ffbdbd', borderRadius: '7px', padding: '0 5px 5px 5px'}}>positive feedback loop</mark> that compounds initial bias over time.</text>
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
          questionHeader: `Reflection Question 1:`,
          question: `What is an example of a difference between correlation vs causation?`,
          answers: [
            <text>
              One widely discussed example is the <b>strong positive correlation between ice cream sales and homicide rates</b>. Clearly, ice cream doesn't cause people to commit violent crime! Instead, the correlation comes from the fact that ice cream sales and crime rates both rise in the summer due to the hot weather.
            </text>
          ]
        },
        {
          questionHeader: `Reflection Question 2:`,
          question: `Why do we want to avoid positive feedback loops in advertising, especially for job and housing ads?`,
          answers: [
            <text>
              <u>Here is a situation we want to avoid:</u> Let’s say the algorithm observes from data that people of color (POC) tend to buy cheaper homes on average than non-POC. It then advertises cheaper listings to POC and more expensive listings to non-POC in order to maximize ad views.
            </text>,
            <text>
              Naturally, the cheaper housing ads gain more traction by POC accounts simply because that is all they were exposed to. However, the algorithm comes to believe that POC prefer cheaper homes and continues to advertise more and more cheap listings. Because of this, <b>POC would gain less and less opportunities to buy a more expensive house, worsening the initial disparity in housing choices that was observed from the data.</b>
            </text>
          ]
        }
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
          body: <text>Here is a graph displaying the <b>gender distribution of computer scientists from the 1960s to now.</b></text>
        },
        {
          body: <PlaceholderInteractive />
        },
        {
          body: `Did you notice the sudden drop in females?`
        },
        {
          body: <text>In the 60s when computers first emerged, women made up most of the computing field. <u>However, in the 70s, personal computers were advertised almost exclusively to men,</u> influencing families to buy computers for boys than girls. While the percentage of women in CS rose in the 80s thanks to the boom of nerd culture, since then it has been in decline.</text>
        },
        {
          body: <text>Despite numerous efforts to lower the gender disparity in tech today, the current distribution has a long way to go until we can erase the <b>severe <mark style={{backgroundColor: '#c3f7c1', borderRadius: '7px', padding: '0 5px 5px 5px'}}>impact</mark> of past advertisements.</b></text>
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
          question: `How might ads affect how people perceive themselves and each other in society?`,
          answers: []
        },
        {
          questionHeader: `Reflection Question 2:`,
          question: `What are some other harmful effects of stereotypes at play currently?`,
          answers: []
        },
      ],
    }
  },
  {
    post: {
      profilePic: facebookAds,
      profilePicName: "Profile Picture - Facebook and its ads",
      header: "Conclusion",
      subheader: "How should we fix this problem?",
      bodyText: [
        {
          body: `While using targeted advertisements can be effective in helping people find things related to their interests, the criteria used to "optimize" these ads may lead to discriminatory advertising and further impose stereotypes.`
        },
        {
          body: <text><b>Here are three ways that Facebook is addressing this issue:</b></text>
        },
        {
          body: <ConclusionGraphic />
        },
        {
          body: <text>In the future, Facebook and other advertising platforms could also incorporate state-of-the-art machine learning <mark style={{backgroundColor: '#bdf0ff', borderRadius: '7px', padding: '0 5px 5px 5px'}}>debiasing</mark> methods to further prevent their algorithms from becoming discriminatory.</text>
        }
      ],
    },
  },
  {
    commentSection: {
      profilePic: facebookAds,
      profilePicName: "Profile Picture - Facebook and its ads",
      followups: [
        {
          questionHeader: `Links to sources:`,
          question: `Where can I find additional information on this topic?`,
          answers: [
            <a href='https://www.technologyreview.com/2019/04/05/1175/facebook-algorithm-discriminates-ai-bias/' target="_blank" rel="noopener noreferrer">
              MIT Technology Review article - Facebook's ad-serving algorithm discriminates by gender and race
            </a>,
            <a href='https://arxiv.org/pdf/1904.02095.pdf' target="_blank" rel="noopener noreferrer">
              Research Paper - Discrimination through optimization: How Facebook's ad delivery can lead to skewed outcomes
            </a>,
            <a href='https://www.computerscience.org/resources/women-in-computer-science/' target="_blank" rel="noopener noreferrer">
              Statistics on Women in Computer Science
            </a>
          ]
        },
      ],
    }
  },
];
