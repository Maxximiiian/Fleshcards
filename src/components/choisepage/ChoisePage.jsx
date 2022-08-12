import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import play from 'audio-play';
import load from 'audio-loader';

export default function ChoisePage() {

  const themeEnter = async function () {
    const sound = await load('/sound/themeEnter.mp3');
    play(sound);
  };

  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => setAllTopics(data));
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          Memes
        </div>
        <div className="card-body">
          <h5 className="card-title">Логично пердположить, что здесь будет куча вопросиков про мемасики, не правда ли, ребятки?</h5>
          <Link onClick={themeEnter} to="/choise/1" className="btn btn-primary">Let's go!</Link>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">
          Lie
        </div>
        <div className="card-body">
          <h5 className="card-title">Немного обмана могут вам предложить не только цыгане и гадалки</h5>
          <Link to="/choise/2" className="btn btn-primary" onClick={themeEnter}>Let's go!</Link>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">
          Geografy
        </div>
        <div className="card-body">
          <h5 className="card-title">Где находится Канад`а?</h5>
          <Link to="/choise/3" className="btn btn-primary" onClick={themeEnter}>Let's go!</Link>
        </div>
      </div>
    </>
  );
}
