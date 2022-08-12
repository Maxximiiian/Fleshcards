import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import play from 'audio-play';
import load from 'audio-loader';

export default function MainPage() {
  const wrongEnter = async function () {
    const sound = await load('/sound/dontEnter.mp3');
    play(sound);
  };
  const succsesEnter = async function () {
    const sound = await load('/sound/entery.mp3');
    play(sound);
  };

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(input);
    if (input.name === 'axios') {
      succsesEnter();
      navigate('/choise');
    } else {
      wrongEnter();
      alert('Вызывайте DANGON MASTERa');
    }
  };

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="container">
        <div className="mx-auto mt-5" style={{ width: '400px' }}>
          <div style={{ height: '250px' }} />
          <form
            className="container bg-light rounded-3 py-3 item"
            align="center"
            onSubmit={submitHandler}
          >
            <div className="mb-3">
              <h2 className="text-dark">Введи запретное слово</h2>

              <input
                type="text"
                name="name"
                className="form-control"
                id="Input"
                value={input.name}
                onChange={changeHandler}
                placeholder="BAD WORD"
              />
            </div>
            <button type="submit" className="btn btn-success mx-3">Done!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
