import React from 'react';
import dial from "./dial.jpg";
import looking from "./looking.jpg";
import whyad from "./whyamiseeingthisad.png";
export default [
  {
    card: {
      head: `1. Lessening the focus on targeted advertisements at the slight cost of revenue loss`,
      pic: dial,
      alt: `A hand on a dial`,
      content: <text>Facebook has decided to rely <i>less</i> on trends in demographic data and <i>more</i> on specific qualities that the advertiser chooses to focus on. This would <u>decrease the advertising algorithm's performance, but lessen the influence of biases within data.</u> However, this still leaves room for the advertiser to impose their biases onto the algorithm, which leads to the next point...</text>
    },
  },
  {
    card: {
      head: `2. Looking towards other parameters to target advertisements with`,
      pic: looking,
      alt: `A hand holding a magnifying glass`,
      content: <text>Such parameters include <u>location, interests, consumer behavior</u>. Facebook also is choosing to prevent advertisers from selecting certain sensitive features such as race. These features are also ignored by the ad algorithm. While this won't completely prevent the algorithm from recognizing demographic trends through other parameters, it will help diminish its impact.</text>
    },
  },
  {
    card: {
      head: `3. Introducing the "Why am I seeing this ad?" feature`,
      pic: whyad,
      alt: `Picture of the 'Why am I seeing this ad?' button on Facebook`,
      content: <text>By increasing <mark style={{backgroundColor: '#bdf0ff', borderRadius: '7px', padding: '0 5px 5px 5px'}}>transparency</mark> in its ad targeting practices, Facebook forces itself to recognize and remove personalization parameters that users may view as problematic.</text>
    }
  },
];