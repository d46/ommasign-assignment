This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Menuboard Engine
It's a simple menuboard engine to generate boards dynamically. Used React to generate DOM and for animations Animejs included.

Two type input figured to create animations.
 - Custom react components ( support advance animation techniques )
 - Predefined elements and its actions from JSON file ( Might be generated from another tool )

Under the `examples/pages/page0.js` is an example for predefined actions. Others are an example for custom react components.

For further approaches we can fetch animations from api which is dynamically generated on server.

#### Structure
```
{
  page: 'Page 1', // Page name
  nextPage: (next) => setTimeout(next, 2000), // Middle function on nextPage
  scene: {
    elements: [] // Elements will generate by react,
    actions: [] // Animations will execute on selected elements by animejs
  } 
}
```

#### Example Usage
```
{
  page: 'Page 1',
  nextPage: (next) => setTimeout(next, 2000), 
  scene: {
    elements: [{
      type: 'Image',
      name: 'Hello World',
      content: 'Hello World'
      id: 'be53a0541a6d36f6ecb879fa2c584b08',
      style: {
        display: 'inline',
        position: 'absolute',
      }
    }]
    actions: [
    // Set initial position at duration 1 (Duration is a time on timeline) 
      {
        action: 'add',
        target: 'be53a0541a6d36f6ecb879fa2c584b08',
        data: ({ targets, positionInfo }) => {
          const {
            height
          } = positionInfo;
          return {
            targets,
            translateX: 950,
            translateY: -height,
            duration: 1,
          }
        }
      },

      // Second action will execute when duration at 2sec
      // Also it allow us to calculation positions with size of element
      {
      action: 'add',
      target: 'be53a0541a6d36f6ecb879fa2c584b08',
      data: ({ targets, positionInfo }) => {
        const {
          height
        } = positionInfo;
        return {
          targets,
          translateX: 950,
          translateY: (window.innerHeight / 2) - (height / 2),
          duration: 2000,
        }
      }
    }
    ]
  } 
}
```

## Preparing 
Open empty tab on chrome and open dev toolsand do not open localhost(Chrome bug). On the dev tools section toggle device toolbar with `cmd+shift+m` and make a new resolution with `1920x1080` or set when responsive. After virtualizing resolution, refresh your empty tab then navigate localhost.

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
