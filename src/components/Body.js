import React from "react";
import {Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Post from "./Post";
class Body extends React.Component{
    render()
    {
        return(
          <React.Fragment>
              <Route exact path="/" component={Home}/>

              <Route path="/login" render={(props)=>(
                  <Login {...props}/>
              )}/>

              <Route path="/logout" render={(props)=>(
                  <Login {...props}/>
              )}/>

              <Route path="/dashboard" component={Dashboard}/>

              <Route path="/posts/:id" render={(props)=>(
                      <Post {...props} />
              )} />

          </React.Fragment>
        );
    }
}

export default Body;