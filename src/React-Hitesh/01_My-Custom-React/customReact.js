const mainContainer = document.querySelector("#customRoot");

function customRender(customReactElement, container) {
  const element = document.createElement(customReactElement.type);
  element.innerHTML = customReactElement.children;

  for (const prop in customReactElement.props) {
    element.setAttribute(prop, customReactElement.props[prop]);
  }
  container.appendChild(element);
}

// JSX will be converted into this kind of object using babel (this is a transpiler)
const myElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "This is a tag",
};

// this is my custom render method. here, we are injecting myElement tree into customRoot
customRender(myElement, mainContainer);

// Main React Component Render Method

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function MyFun() {
  return <a href="https://google.com">Click me</a>;
}

const Element = <a href="https://google.com">this is variable</a>;

// coversion of object

let obj = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "This is a obect"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {obj}
    </React.StrictMode>
);
