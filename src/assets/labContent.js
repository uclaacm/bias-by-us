/*labContent can be represented as an array of objects. Each one will be a post/followup pair
If a post does not have a followup attached to it, you can simply pass null in.
*/

export default [
  {
    post: {
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
    followups: [
      {
        question:
          "What are the pros and cons of personalizing advertisements in this way?",
        answerHeader: `In some cases, personalizing ads is beneficial. `,
        answer: `For example, female hygiene products are much more
             relevant to women, and therefore would be much more efficient to advertise to female accounts.`,
      },
      {
        question: null,
        answerHeader: `In other cases, personalizing ads will promote unfairness.`,
        answer: `For example, because the optimized algorithm 
            observed that men are more likely to respond to software engineer roles, a female software engineer would be 
            much less likely to encounter advertisements related to her career.`,
      },
      {
        question: `Would you prefer to have ads relevant to you and your interests or 
            have ads that cover a diverse list of interests?
            `,
        answer: null,
      },
      {
        question: `How does discrimination law justify or limit the 
            personalization of ads?`,
        answerHeader: `According to law, discrimination is defined as:`,
        answer: `the treatment, consideration, or distinction in favor of 
            or against a person based on the group or class that they belong to rather than on individual merit. 
           `,
      },
      {
        question: null,
        answerHeader: ` Legally protected classes include: `,
        answer: `race, color, sex, religion, national origin, citizenship, age, pregnancy, familial 
            status, disability status, veteran status, and genetic information.`,
      },
      {
        question: null,
        answerHeader: `Discrimination law is not only limited to the final decision made (i.e. a hiring decision) but also extend 
            to marketing and advertising.`,
        answer: `If advertising only to a certain demographic can affect other 
            groups’ access to opportunities that affect their life chances 
            (such as their job, money, house, education, or health), then that action is considered discriminatory.`,
      },
    ],
  },
  {
    post: {
      header: "Classifying People",
      subheader: "Why do we divide people into groups?",
      bodyText: [
        {
          body: `No two people in the world are exactly alike. To more easily keep track of the diverse set of people
          we meet, our mind automatically groups and labels people based on easily identifiable features, such as their
           gender, race, and age.`,
        },
        { body: "INSERT VISUAL HERE", bold: true },
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
    followups: [
      {
        question: `What stereotypes are associated with the groups that you belong to?`,
        answer: null,
      },
      {
        question: `To what degree do those stereotypes accurately portray who you are?`,
      },
    ],
  },
];
