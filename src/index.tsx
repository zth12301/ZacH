import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  HashRouter,
  Route,
  Routes,
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


root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" errorElement={<ErrorPage/>} element={<>
                                  <Navbar />
                                  <Home />
                                </>}/>

        <Route path="/resume" errorElement={<ErrorPage/>} element={<>
                                  <Navbar />
                                  <Resume />
                                </>}/>

        <Route path="/contact" errorElement={<ErrorPage/>} element={<>
                                        <Navbar />
                                        <Contact />
                                      </>}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
