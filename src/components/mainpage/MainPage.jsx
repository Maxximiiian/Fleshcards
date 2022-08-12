import React, { useState } from 'react';

export default function MainPage() {
  const [input, setInput] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('ugbuygbuybbh');
  };

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  return (
    <div>
      <div className="container">
        <div className="mx-auto mt-5" style={{ width: '400px' }}>
          {/* <div style={{ height: '250px' }} /> */}
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
