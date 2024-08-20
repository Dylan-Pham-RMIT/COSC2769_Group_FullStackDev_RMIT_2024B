import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css'

import NotFound from './NotFound'
import Login from './pages/Login'
import GroupFeed from './pages/GroupFeed'
import Profile from './pages/Profile'



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    element: <Profile/>,
    errorElement: <NotFound />,
  },
  {
    path: "/group",
    element: <GroupFeed/>,
    errorElement: <NotFound />,
  },  
 
  
]);


const root = createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
