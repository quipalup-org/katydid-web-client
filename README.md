> This project uses the firebase login method

> I give you a demo account in file `.env.example`. You need to rename it `.env` before `npm run start`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## User Guide

You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/).

## Configure your local machine

1. Create a file `.env` at the project root with the following content:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_APPID=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_MEASUREMENT_ID=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
```

## Deployment on Heroku

### Configuration

*Step 1*

Go to `Settings -> Config Vars` and set the env. variables:

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_APPID
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_MEASUREMENT_ID
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
```
*Step 2*

Go to `Settings -> Buildpacks -> Add buildpack` and add `https://github.com/mars/create-react-app-buildpack.git`

### Trigger deployment

`git push heroku main`

### Open the deployed app

`heroku open`
