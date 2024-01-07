import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './React-Hitesh/06_React_Router/router';



function MyFun() {
  return <a href='https://google.com'>
    Click me
  </a>
}

const Element = (<a href="https://google.com">this is variable</a>)


// coversion of object

let obj = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  'This is a obect'
)





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    // <RouterProvider router={router} />
    <App />
  // </React.StrictMode>
);

