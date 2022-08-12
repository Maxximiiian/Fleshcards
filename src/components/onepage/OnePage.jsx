import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import play from 'audio-play';
import load from 'audio-loader';

export default function OnePage() {
  const location = useLocation();
  const [input, setInput] = useState('');

  const path = location.pathname;

  const [allQuestion, setAllQuestion] = useState([]);
  useEffect(() => {
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => setAllQuestion(data));
  }, []);
  if (allQuestion.length === 0) return null;
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const right = async function () {
    const sound = await load('/sound/Boss.mp3');
    play(sound);
  };

  const falsy = async function () {
    const sound = await load('/sound/Spank.mp3');
    play(sound);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (input.name === allQuestion[0].answer) {
      right();
      alert('KRYTO');
    } else {
      falsy();
      // alert('Вызывайте DANGON MASTERa');
    }
  };

  return (
    <div>
      {allQuestion.map((x) => (
        <div className="card">
          <form
            className="container bg-light rounded-3 py-3 item"
            align="center"
            onSubmit={submitHandler}
          >
            <img src={x.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{x.question}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{x.option1}</li>
              <li className="list-group-item">{x.option2}</li>
              <li className="list-group-item">{x.option3}</li>
              <li className="list-group-item">{x.option4}</li>
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
      ))}
    </div>
  );
}

{ /* <div className="row">
{questionAll?.map((el) => <PostQue key={el.id} post={el} />)}
</div> */ }
