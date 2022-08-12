import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function OnePage() {
  const [input, setInput] = useState('');

  const [allQuestion, setAllQuestion] = useState([]);
  useEffect(() => {
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => setAllQuestion(data));
  }, []);
  if (allQuestion.length === 0) return null;
  console.log(allQuestion[0].id);
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (input.name === allQuestion) {
      alert('KRYTO');
    } else {
      alert('Вызывайте DANGON MASTERa');
    }
  };

  return (
    <div className="card">
      <form
        className="container bg-light rounded-3 py-3 item"
        align="center"
        onSubmit={submitHandler}
      >
        <img src={allQuestion[0].image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{allQuestion[0].question}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{allQuestion[0].option1}</li>
          <li className="list-group-item">{allQuestion[0].option2}</li>
          <li className="list-group-item">{allQuestion[0].option3}</li>
          <li className="list-group-item">{allQuestion[0].option4}</li>
        </ul>
        <div className="card-body">
          <input
            type="text"
            name="name"
            className="form-control"
            id="Input"
            value={input.name}
            onChange={changeHandler}
            placeholder="Your Answer"
          />
        </div>
        <button type="submit" className="btn btn-success mx-3">Answer!</button>
      </form>
    </div>
  );
}
