# Log File Parser

This is a tool to parse the log files and retrieve unique number of IPs, Top 3 Most active Ips and Top 3 Most visited urls.

## Getting Started

### Prerequisites

- Node 10
- Yarn 1.2

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all the requires node modules.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn format`

Runs prettier on appropriate files with excluded files based on ignore file, will ensure code formatting is adhered to.

### Project folder structure

```bash
 - public                  # static assets (i.e. images)
 - src
   - components             # React components
        - [component files]
        - [component test files]
   - data                  #  data files
        - <test-data-folder>
        - [view files]
    - utils                 # application utils
        - [util files]
        - [util test files]
   - views                  # application views
        - [view files]
        - [view test files]
   - App.tsx                  # main app structure and wrappers
   - App.css                  # main app styles
   - index.css                # global styles
   - index.tsx                # app initializer
   - [App bootstrap files]
```
