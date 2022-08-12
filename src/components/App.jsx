import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/choise" />
        <Route path="/choise/:id" />
      </Routes>
      <div>che nibyd</div>
    </div>
  );
}
