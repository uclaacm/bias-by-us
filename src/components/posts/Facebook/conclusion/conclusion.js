import React from 'react';
import '../../../../assets/Facebook/facebookLabContent.css'
import dial from "../../../../assets/dial.jpg";
import looking from "../../../../assets/looking.jpg";
import whyad from "../../../../assets/whyamiseeingthisad.png";
export default [
  {
    card: {
      head: "1. Lessening the focus on targeted advertisements at the slight cost of revenue loss",
      pic: dial,
      alt: "A hand on a dial",
      content: <p>Facebook has decided to rely <mark className="italic">less</mark> on trends in demographic data and <mark className="italic">more</mark> on specific qualities that the advertiser chooses to focus on. This would <mark className="underline">decrease the advertising algorithm's performance, but lessen the influence of biases within data.</mark> However, this still leaves room for the advertiser to impose their biases onto the algorithm, which leads to the next point...</p>
    },
  },
  {
    card: {
      head: "2. Looking towards other parameters to target advertisements with",
      pic: looking,
      alt: "A hand holding a magnifying glass",
      content: <p>Such parameters include <mark className="underline">location, interests, consumer behavior</mark>. Facebook also is choosing to prevent advertisers from selecting certain sensitive features such as race. These features are also ignored by the ad algorithm. While this won't completely prevent the algorithm from recognizing demographic trends through other parameters, it will help diminish its impact.</p>
    },
  },
  {
    card: {
      head: "3. Introducing the \"Why am I seeing this ad?\" feature",
      pic: whyad,
      alt: "Picture of the 'Why am I seeing this ad?' button on Facebook",
      content: <p>By increasing <mark className="blue highlight">transparency</mark> in its ad targeting practices, Facebook forces itself to recognize and remove personalization parameters that users may view as problematic.</p>
    }
  },
];