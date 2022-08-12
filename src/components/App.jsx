import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import MainPage from './mainpage/MainPage';
import ChoisePage from './choisepage/ChoisePage';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/choise" element={<ChoisePage />} />
        <Route path="/choise/:id" />
      </Routes>
    </div>
  );
}
