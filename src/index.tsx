import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Resume from './pages/resume';
import Contact from './pages/contact';
import ErrorPage from './pages/error-page';
import Navbar from './components/Navbar';

import './index.css';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
              <Navbar />
              <Home />
            </>,
    errorElement: <ErrorPage />
  },
  {
    path: "/resume",
    element: <>
              <Navbar />
              <Resume />
             </>,
  },
  {
    path: "/contact",
    element: <>
              <Navbar /> 
              <Contact />
             </>,
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
