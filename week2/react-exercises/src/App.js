import React from 'react';
import './App.css';
import Friend from './components/Friend'
import DogGallery from './components/DogGallery'
import RandomJoke from './components/RandomJoke'

function App() {
  return (
    <div className="App">
      <Friend />
      <p style={{ textAlign: 'center' }}>********************</p>
      <DogGallery />
      <p style={{ textAlign: 'center' }}>********************</p>
      <RandomJoke />
    </div>
  );
}

export default App;
