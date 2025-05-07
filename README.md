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

1. Make sure your main branch is updated with other peoples' changes.
   ```
   git checkout main
   git pull
   ```
2. Make a new branch of this repository. `main` is a protected branch, **so you cannot push to it**.
   a. For branch naming, follow this convention: `<issue-number>_<change-you-made>` (e.g. `43_animate_checkmark`).
   ```
   git checkout -b <your-branch-name>
   ```
3. Implement your code changes for your feature: Beep boop away! Before pushing, make sure that your app builds with 'npm run build', without any errors.
4. Update your local branch with changes from main branch.
   ```
   git merge main
   ```
5. Once you're ready, stage and commit your changes.
   ```
   git commit -am <your-message>
   ```
6. Move your local branch changes to remote repository.
   ```
   git push --set-upstream origin <your-branch-name>
   ```
7. Make a pull request with your changes, and let someone on your project team know.
   a. Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!
8. If your code passes code review, then we can **squash and merge** it into `main`. Congratulations! If you'd like, it's now safe to delete your branch.


## Licensing & Attribution

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!
