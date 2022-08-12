import React from 'react';

export default function MainPage() {
  const authHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="mx-auto mt-5" style={{ width: '400px' }}>
          {/* <div style={{ height: '250px' }} /> */}
          <form className="container bg-light rounded-3 py-3 item" align="center">
            <div className="mb-3">
              <h2 className="text-dark">dfgdgfdfg</h2>
              <h2 className="text-dark">dfgdgdf</h2>
            </div>
            <button type="submit" className="btn btn-success mx-3" onClick={authHandler}>Done!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
