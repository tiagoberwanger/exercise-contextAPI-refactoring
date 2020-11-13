import React, { useState } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import CarContext from './Contexts/CarContext'

function App() {
  const [red, setRed] = useState(false)
  const [blue, setBlue] = useState(false)
  const [yellow, setYellow] = useState(false)
  const moveCar = (car, side) => {
    if (car === 'red') {
      setRed(side)
    }
    else if (car === 'blue') {
      setBlue(side)
    }
    else if (car === 'yellow') {
      setYellow(side)
    }
    
  }
  return (
    <div className="container">
    <CarContext.Provider value={{red, blue, yellow, moveCar}}>
      <Cars />
      <TrafficSignal />
    </CarContext.Provider>
    </div>
  );
}

export default App;
