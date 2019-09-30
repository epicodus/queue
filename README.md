# Queue

A queuing system built using [Ember.js](http://www.emberjs.com).
Allows students to 'queue up' for help,
giving instructors a list of which students need help in the order they asked.

## Installation

This app's dependencies are out of date.
It will only work on Node v10.
Downgrade if you are using a higher version of Node.

```shell
npm install
bower install
```

## Development

* `ember server`
* Visit http://localhost:4200

## Deploying

This app uses a Firebase backend and is hosted on Firebase hosting.
To install Firebase tools and deploy, run from your project folder:

```shell
npm install -g firebase-tools
firebase login
ember build --environment=production
firebase deploy
```
