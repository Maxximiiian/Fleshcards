/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { NavLink } from 'react-router-dom';
import play from 'audio-play';
import load from 'audio-loader';

export default function Navbar() {
  const playHandler = async function () {
    const sound = await load('/sound/matrix.mp3');
    play(sound);
  };

  return (
    <nav className="navbar navbar-light bg-light rounded-3 item">
      <h2 className="text-dark my-auto mx-3">Welcome to MeMeLaNd!</h2>
      <NavLink onClick={playHandler} to="/" className="btn btn-secondary my-auto align-self-right mx-3">Главная</NavLink>
      <NavLink onClick={playHandler} to="/choise" className="btn btn-secondary my-auto align-self-right mx-3">Иллюзия выбора</NavLink>
    </nav>
  );
}
