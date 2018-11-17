This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preparing
Open empty tab on chrome and dev tools. Then virtualize screen with `cmd+shift+m` and make a new resolution with `1920x1080`. After virtualizing resolution, refresh your empty tab then navigate localhost.

## Definition
It's a simple menuboard engine mvp to generate boards dynamically. There is two type input to create animations.
 - Custom react components ( support advanced animation techniques )
 - Predefined elements and its actions from JSON file ( Might be generated from another tool )

Under the `services/mocks/page0.js` is an example for predefined actions. Others are an example for custom react components.

For further approaches we can fetch animations from service which is dynamically generated on server.

## Service Worker
It's allow us to run our app offline. Came up with react-scripts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
