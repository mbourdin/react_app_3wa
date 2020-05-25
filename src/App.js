import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router,Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Body from "./components/Body";
// import Denomination from "./Denomination";
// import logo from './logo.svg';
import './App.css';

// const denominations=[1,5,10,20,50,100,200];

class  App extends React.Component{
    constructor(props) {
        super(props);
        if(localStorage.getItem("token")!=="true") {
            this.state = {logged: false};
        }
        else
        {
            this.state={logged:true}
        }
    }
    setLogged=(logged)=>
    {
        this.setState({logged:logged});
    }
    render(){
    return (
    <div className="App">
        {/*<Denomination  denominations={denominations.reverse()}/>*/}
        <Router>
            <Menu logged={this.state.logged} />
            <Switch>
                <Body logged={this.state.logged} setLogged={this.setLogged}/>
            </Switch>
        </Router>
    </div>
  );}
}

export default App;
