import { createElement } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import Github from "./Github";
import About from "./About";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >

            // all routes will be replaced with outlet inside Layout component
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="github" element={<Github />} />
            
        </Route>
    )
)


// this routes should be used in index.js
// replace <App /> component with  <RouterProvider router={router} />
export {router}