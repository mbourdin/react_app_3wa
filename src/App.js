import React from 'react';
import { BrowserRouter as Router,Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Body from "./components/Body";
// import Denomination from "./Denomination";
// import logo from './logo.svg';
import './App.css';

// const denominations=[1,5,10,20,50,100,200];

function App() {
  return (
    <div className="App">
        {/*<Denomination  denominations={denominations.reverse()}/>*/}
        <Router>
            <Menu/>
            <Switch>
                <Body />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
