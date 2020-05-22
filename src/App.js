import React from 'react';
import Denomination from "./Denomination";
// import logo from './logo.svg';
import './App.css';

const denominations=[1,5,10,20,50,100,200];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Denomination  denominations={denominations.reverse()}/>
      </header>
    </div>
  );
}

export default App;
