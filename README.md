# Employee Poll Project

This is the assignment project from Udacity which is a polling app that allows employees to create polls for coworkers.
Within the app, users can not only be able to answer polls, also see which polls they haven’t answered, see how other people have voted on particular poll in live progress and see the ranking of users on the leaderboard.
It also contains User Authentication with new user signup.

## Project Setup and Testing Command

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- test all of test.js files with `npm run test`

## Project directory structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
└── src
    ├── actions # All of redux action creators are in this directory.
    │   ├── shared.js # Shared Data Action that will be called after login. fetch backend data and set response data to store according to authed user id.
    │   ├── questions.js # All actions that are related to question state
    │   ├── users.js # All actions that are related to user state
    ├── components # All of react components are in this directory.
    │   ├── AnimatedProgressBar.js # Animated Progress Bar component which is used in AnswerDetail screen.
    │   ├── AnsweredDetail.js # AnsweredDetail component is shown when authed user chose random poll on the home page and that poll had been already answered by that user.
    │   ├── Nav.js # Nav component which is used to navigate between different pages.
    │   ├── NewDetail.js # NewDetail component is shown when authed user chose random poll on the home page and that poll hadn't been answered by that user before.
    │   ├── OptionContainer.js # Option Container component which is used in NewDetail screen that shows user two different options to answer poll.
    │   ├── ProtectedRoute.js # ProtectedRoute is a higher order component that protects routes which needed authentication.
    │   ├── Question.js # Question component is used in New page where user can create new poll.
    │   ├── UnProtectedRoute.js # UnProtectedRoute is a higher order component that uses for routes which don't need authentication.
    ├── css # All of stylesheets are in this directory.
    │   ├── Login.css # Stylesheet for Login page
    │   ├── NotFound.css # Stylesheet for 404 page
    ├── middleware # All middlewares are in this directory.
    │   ├── index.js # Behave like a main gate of middleware that includes all middlewares, redux thunk middlware is included inside.
    │   ├── logger.js # provides logging actions between dispatching an action, and the moment it reaches the reducer.
                      # logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
    ├── pages # All different screen pages are in this directory.
    │   ├── Admin.js # Admin page will be shown whenever app starts and authed user logout from app.
    │   ├── Detail.js # Poll Detail Page. AnswerDetail Component will be shown if the authed user had already answered, if not NewDetail component will be showed.
    │   ├── Home.js # Home page is showed after successful user login. In home page, all the polls are displayed under two categories: New and Answered.
    │   ├── Leaderboard.js # In leaderboard screen, list of employees will be shown by descending order of created and answered polls.
    │   ├── Login.js # User Login Page
    │   ├── New.js # New Page is where user can create new poll with two different options.
    │   ├── NotFound.js # 404 Not Found Page
    │   ├── Signup.js # User Signup Page
    ├── reducers # All redux reducers in this directory.
    │   ├── authedUser.js # Reducer that is related to authedUser State, returns new action based on type of action.
    │   ├── index.js # Behave like a main gate of reducer that includes all reducers.
    │   ├── question.js # Reducer that is related to question State, returns new action based on type of action.
    │   ├── user.js # Reducer that is related to user State, returns new action based on type of action.
    ├── tests # All test files are in this directory.
        ├── __snapshots__
            ├── Leaderboard.test.js.snap # result of snap shot test file to reference with _Leaderboard.test.js_
    │   ├── data.test.js # Test on data storing api to verify appropriate response is returned in both correct or incorrect data is passed to the function.
    │   ├── Leaderboard.test.js # Snapshot testing that renders a Leaderboard screen, takes a snapshot, then compares it to a reference snapshot file stored in
                                # _src/tests/__snapshots__/Leaderboard.test.js.snap_.
    │   ├── Login.test.js # test on login screen to verify that a user name field, password field, and submit button are present on the page.
    │   ├── Nav.test.js # test on nav component to verify the navigation bar displays all expected links.
    │   ├── Signup.test.js # test on signup screen to verify that a user entering different password in  password and confirmPassword field and clicking submit will see an error on the page
    ├── utils # Contains mocked data, backend api and helper utility files.
    │   ├── _DATA.js # Contains mocked data for users and questions. Also contains methods that can manipulates data from other parts of app.
    │   ├── api.js # act like a buffer between _DATA.js and other files that would like to manipulate data from _DATA.js
    │   ├── helper.js # contains utility functions like formatDate and formatQuestion which can transform requested argument into formated one.
    ├── App.css # Styles for the whole app.
    ├── App.js # This is the root of app. It contains Routes Component and static HTML.
    ├── App.test.js # Test file that test login form is in the document when app start.
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
