import React from 'react';
import Root from '../Root/Root';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../../Home/Home/Home';
import Contact from '../../Home/Contact/Contact';



const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/Contact',
          element: <Contact></Contact>
        }
      ]
      
    },
  ]);

export default Router;