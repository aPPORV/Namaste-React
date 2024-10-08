import React from "react";
import ReactDOM from "react-dom/client";

/* 

HTML Structure:
<div id="parent">
  <div id="child">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

Explanation:
ReactElement(Object) => HTML(Browser Understands)

*/

// Creating a parent React element with two children
const parent = React.createElement("div", { id: "parent" }, [
  // First child div with h1 and h2 tags
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
  // Second child div with h1 and h2 tags
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
]);

// Log the created parent React element to the console
console.log(parent);

// Example of creating a heading element (commented out for now)
// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); // React takes care of creating the element; in this case, it's the heading

// React Element is a normal JavaScript Object
// console.log(heading); // Log the heading object to the console

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root")); 
// ReactDOM is responsible for rendering the root to the DOM. 
// This root is where all React code will run.

// Render the parent React element to the DOM
root.render(parent);

// Explanation of the render function in React:
// The render function is used to update the UI. 
// It defines the HTML code within a specified HTML element, 
// allowing for dynamic views based on the logic defined in the render function.
