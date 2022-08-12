import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import MainPage from './mainpage/MainPage';
import ChoisePage from './choisepage/ChoisePage';
import OnePage from './onepage/OnePage';
import Lie from './Lie';

export default function App() {
  const location = useLocation();
  return (
    <div className="container">
      { location.pathname === '/' ? <></> : <Navbar /> }
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/choise" element={<ChoisePage />} />
        <Route path="/choise/1" element={<OnePage />} />
        <Route path="/choise/2" element={<Lie />} />
        <Route path="/choise/3" element={<OnePage />} />
      </Routes>
    </div>
  );
}
