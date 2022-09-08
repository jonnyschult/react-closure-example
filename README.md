# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# react-closure-example

**The problem:** The `console.log` running via the interval keeps printing out `0`, even after incrementing the value via the `onClick` function.

**The cause:** the `useEffect` creates a lexical environment–a process called closure–when the component mounts, and does not update that environment, unless it recognizes a change via a value added to the dependency array. _Recognizing dependency a change does reset the interval_. Not a big deal, but something to keep in mind if the interval is particularly important for your purposes.

**The solution:** Add `count` to the dependency array

**Take-aways:** 1: Thoroughly vet the scope you are creating with a `useEffect` and be sure to add all variables to your dependency array. 2: Know that when using a ‘useEffect’, the function called inside that `useEffect` is bound to the lexical scope of that useEffect when it is first called, i.e. on mounting. 3: Become a backend engineer.
