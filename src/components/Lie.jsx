import React from 'react';
import { Link } from 'react-router-dom';

export default function Lie() {
  return (
    <div>
      <div className="card">
        <form
          className="container bg-light rounded-3 py-3 item"
          align="center"
        >
          <img src="https://shifter.pt/wp-content/uploads/2018/03/rickrolled.png" className="card-img-top" alt="..." />
          <div className="pt-3 mt-3">
            <Link to="/choise" className="btn btn-primary">HA HA HA HA!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
