import React from 'react';
import Root from '../Root/Root';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../../Home/Home/Home';



const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        }
      ]
      
    },
  ]);

export default Router;