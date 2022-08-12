import React from 'react';
import { Link } from 'react-router-dom';

export default function ChoisePage() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Memes
        </div>
        <div className="card-body">
          <h5 className="card-title">Логично пердположить, что здесь будет куча вопросиков про мемасики, не правда ли, ребятки?)</h5>
          <Link to="`/choise/${id}`" className="btn btn-primary">Let's go!</Link>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">
          Lie
        </div>
        <div className="card-body">
          <h5 className="card-title">Немного обмана могут вам предложить не только цыгане и гадалки</h5>
          <Link to="`/choise/${id}`" className="btn btn-primary">Let's go!</Link>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">
          Geografy
        </div>
        <div className="card-body">
          <h5 className="card-title">Где находится Канад`а?</h5>
          <Link to="`/choise/${id}`" className="btn btn-primary">Let's go!</Link>
        </div>
      </div>
    </>
  );
}
