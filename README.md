# SpaceX
Work with API [spaceX](https://github.com/r-spacex/SpaceX-API).

---

## Technologies
* `HTML` / `*`
* `CSS` / `Sass`
* `React` / `Redux`
* `Node` / `Express` / `Mongoose`

## Quickstart
Created with [create-react-app](https://github.com/facebook/create-react-app)
1. `git clone https://github.com/betelgeuseAS/SpaceX.git`
2. `cd SpaceX` and `npm install`
3. `npm start`

If the tab doesn't open on your own browser, then open your web browser to localhost:3000.

## API Routs
Documentation spaceX: [Postman](https://web.postman.co/collections/6630209-a0b427ff-f46f-459b-97c9-e252b9f3f8e4?version=latest&workspace=aa8055e5-dfa9-4c7e-807a-0e3ac6ee0674)

## Dependencies
A brief description of each package and the function it will serve (front-end):
* `axios`: promise based HTTP client for making requests to our backend
* `classnames`: used for conditional classes in our JSX
* `react-redux`: allows us to use Redux with React
* `react-router-dom`: used for routing purposes
* `redux`: used to manage state between components (can be used with React or any other view library)
* `redux-thunk`: middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions
* `redux-logger`: middleware for Redux that allows watch on store.
* `node-sass`: It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware

## Bug fixes
* `Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 12.x`
Fix:
1) `npm install`
2) `npm rebuild node-sass --force` or `npm rebuild node-sass`

* `Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (72)`
1) `npm uninstall node-sass`
2) `npm install node-sass`

* `Another`  
You can always use [nvm (Node Version Manager)](https://canonium.com/articles/managing-node-versions-with-windows-nvm)
