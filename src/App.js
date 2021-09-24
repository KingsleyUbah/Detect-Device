import React from 'react';
import './App.css';
import Button from './components/Button';
import image from './5.jpg'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <img src={image} alt="Kingo" />
      </div>
      <div className="text">
        <h1>Kingo App</h1>
        <p>Download the kingo app and to get up-to-date super features for free. Available for all devices.</p>
        <Button />
      </div>
    </div>
  );
}

export default App;
