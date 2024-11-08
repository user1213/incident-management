# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Screenshots

<img width="1053" alt="image" src="https://github.com/user-attachments/assets/2a2f1d60-4cd6-4212-8b3f-993f6043cc16">

- Install the app using `npm i` and start it on your localhost using `npm start`
- Tests are run using `npm run test`
- Incidents are displayed in each card
- They can be filtered by Status and Urgency.
- Cards are color coordinated based on the Status
- Note: https://api.pagerduty.com/incidents at https://developer.pagerduty.com/api-reference/9d0b4b12e36f9-list-incidents does not have any incidents available when fetched.
- Hence for demo purpose, using a sample JSON data based on the incident structure provided by above documentation
- App is hosted at https://6728463b92df75b1892d383b--regal-beignet-9f54e7.netlify.app/
