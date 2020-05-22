import React from "react";
import PostsLinks from "./PostsLinks";
class Dashboard extends React.Component{
    render(){
        return(
                <React.Fragment>
                    <h1>Dashboard</h1>
                    <PostsLinks/>
                </React.Fragment>
        );
    }
}
export default Dashboard