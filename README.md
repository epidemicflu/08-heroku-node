#Project 8 - Heroku & Node

##Description
For this project, you will learn how to deploy a node.js website to Heroku.

***

##Setup

###1) Fork this repo
Click the "Fork" button on the top-right corner of this page.

###2) Clone your new repo into a Cloud9 account workspace
1. Login to Cloud9 and go to https://c9.io/account/repos
2. Find "08-heroku-node" and click "Clone to edit"

Once the workspace has been processed check to be sure it is up to date by running ` git status ` in the terminal. You should receive a message telling you that your branch is up to date.
![Imgur](http://i.imgur.com/RKdsduL.png)

###3) Sign up for a Heroku account at https://www.heroku.com/

##Instructions
To push your code to Heroku, first commit your changes and then run the following commands in your terminal:

1. `heroku login`
2. `heroku create your-subdomain` (change "your-subdomain" to something unique!)
  - (It should say "Git remote heroku added" if it succeeded)
3. `git push heroku`
4. Visit https://your-subdomain.herokuapp.com/

##Notes

**NOTE: It is common practice to push your changes to your GitHub repository often. It is recommended you make a push after every major change. Through the course of completing this project you should make 7-10 pushes to GitHub. Your manager will be grading you on this.**

To push to GitHub run the following commands in your terminal:  
`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push`
