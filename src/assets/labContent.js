export default {
  posts: [
    {
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
  ],

  followups: [
    [
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
  ],
};
