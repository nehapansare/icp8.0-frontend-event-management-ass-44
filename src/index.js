import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from '../src/View/Home/Home'
import ViewEvents from './Compoents/ViewEvents/ViewEvents';
import DetailEvents from './Compoents/DetailEvents/DetailEvents';
import CreateEvents from './Compoents/CreateEvents/CreateEvents';
import UpdateEvents from './Compoents/UpdateEvents/UpdateEvents';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
    const router = createBrowserRouter([
        {
        path:"/",
        element:<Home/>
        },
        {
            path:"/view_events",
            element:<ViewEvents/>
        },
        {
            path:"/detail_events/:id",
            element:<DetailEvents/>
        },
        {
            path:"/create_events",
            element:<CreateEvents/>
        },
        {
            path:"/update_events/:id",
            element:<UpdateEvents/>
        }
       
    ]);
root.render(<RouterProvider router={router}/>)   

