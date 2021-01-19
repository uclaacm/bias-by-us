import dial from "./dial.jpg";
import looking from "./looking.jpg";
import whyad from "./whyamiseeingthisad.png";
export default [
  {
    card: {
      head: `1. Lessening the focus on targeted advertisements at the slight cost of revenue loss`,
      pic: dial,
      alt: `A hand on a dial`,
      content: `Facebook has decided to rely less on trends in demographic data and more on specific qualities that the advertiser chooses to focus on. This would decrease the advertising algorithm's performance, but lessen the influence of biases within data. However, this still leaves room for the advertiser to impose their biases onto the algorithm, which leads to the next point...`
    },
  },
  {
    card: {
      head: `2. Looking towards other parameters to target advertisements with`,
      pic: looking,
      alt: `A hand holding a magnifying glass`,
      content: `Such parameters include interests and consumer behavior. Facebook now also prevents housing, employment, and credit ads from being targeted by race, gender, ZIP code, or multicultural affinity, or any other protected characteristics. While this won't completely prevent the algorithm from recognizing demographic trends through other parameters, it will help diminish its impact.`
    },
  },
  {
    card: {
      head: `3. Introducing the "Why am I seeing this ad?" feature`,
      pic: whyad,
      alt: `Picture of the 'Why am I seeing this ad?' button on Facebook`,
      content: `By increasing transparency in its ad targeting practices, Facebook forces itself to recognize and remove personalization parameters that users may view as problematic.`
    }
  },
];