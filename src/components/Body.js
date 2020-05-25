import React from "react";
import {Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import Post from "./Post";
class Body extends React.Component{
    render()
    {
        return(
          <React.Fragment>
              <Route exact path="/" component={Home}/>

              <Route path="/(login|logout)/" render={(props)=>(
                  <Login {...props} setLogged={this.props.setLogged} logged={this.props.logged}/>
              )}/>

              <PrivateRoute path="/dashboard">
                  <Dashboard />
              </PrivateRoute>

              <Route path="/posts/:id" render={(props)=>(
                      <Post {...props} />
              )} />

          </React.Fragment>
        );
    }
}

export default Body;