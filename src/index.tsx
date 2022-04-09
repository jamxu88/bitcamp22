import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Pages/Landing';
import './Static/Inter-Font/Inter-Regular.ttf';
import './Static/Inter-Font/Inter-Light.ttf';
import './Static/Inter-Font/Inter-Medium.ttf';
import './Static/Inter-Font/Inter-SemiBold.ttf';
import Dashboard from './Components/Pages/Dashboard';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);