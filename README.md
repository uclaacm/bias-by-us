# Bias by Us

[![Netlify Status](https://api.netlify.com/api/v1/badges/3853d389-4eab-44be-93f5-910b7192c9c1/deploy-status)](https://app.netlify.com/sites/infallible-mirzakhani-e36a0d/deploys)
![Production Build](https://github.com/uclaacm/bias-by-us/workflows/Production%20Build/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

## Overview

**Bias by Us** is one of [ACM Teach LA](https://teachla.uclaacm.com)'s learning labs, a set of interactive online web modules designed to make learning easier. This specific learning lab is focused on **bias in machine learning**: we teach students about different ways that machine learning models can become biased/discriminatory through 3 individual case studies, including feedback loops in personalized advertising.

This project was written with React.js. We also make use of react-router, anime.js, (insert more libraries...). It was bootstrapped with Create React App. It is deployed with Netlify.

(This project is currently in the works. More updates will be coming soon!)

## Development Setup

We'll use a really common Node.js project workflow!

First, let's clone our repository, and install all of our node dependencies:

```
git clone https://github.com/uclaacm/bias-by-us.git
cd bias-by-us
npm install
npm install react-scripts
```

To start our app, you just need to run `npm start` within the website folder!

```
cd website
npm start
```

And to build our project for production (with CRA's webpack bundling and all that goodness),

```
cd website
npm run build
```

## Contribution Workflow

Want to make a change? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm run build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/bias-by-us/pulls) with your changes, and let someone on the dev team know. Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!
7. If your code passes code review, we'll merge it into `master`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

## Licensing & Attribution

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!
