import React, { createContext } from 'react';
import './App.css';
import Cars from './Cars';

export const CarContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, side) {
    this.setState({
      [color]: side,
    })
  }

  render() {
    return (
      <CarContext.Provider value={{ ...this.state, moveCar: this.moveCar }}>
        <Cars />
      </CarContext.Provider>
    );
  }
}

export default App;
