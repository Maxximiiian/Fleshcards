import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light rounded-3 item">
      <h2 className="text-dark my-auto mx-3">Welcome to MeMeLaNd!</h2>
      <NavLink to="/" className="btn btn-secondary my-auto align-self-right mx-3">Главная</NavLink>
      <NavLink to="/" className="btn btn-secondary my-auto align-self-right mx-3">Че нибудь</NavLink>
      <NavLink to="/" className="btn btn-secondary my-auto align-self-right mx-3">Че нибудь</NavLink>
    </nav>
  );
}
