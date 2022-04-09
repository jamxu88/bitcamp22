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
import Groups from './Components/Pages/Groups';
import Balances from './Components/Pages/Balances';
import Preferences from './Components/Pages/Preferences';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);