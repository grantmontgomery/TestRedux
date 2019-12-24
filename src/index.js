import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import allReducers from "./redux";
import { createStore } from "redux";

const store = createStore(allReducers);

//Store

//Action Increment

// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

//Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

//Display in console

// store.subscribe(() => console.log(store.getState()));

//Dispatch

// store.dispatch(increment());

ReactDOM.render(<App></App>, document.getElementById("root"));
