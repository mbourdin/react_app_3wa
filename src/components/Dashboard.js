import React from "react";
import PostsLinks from "./PostsLinks";
class Dashboard extends React.Component{
    render(){
        return(
                <React.Fragment >
                    <h1 className="text-left">Dashboard</h1>
                    <PostsLinks className="text-left"/>
                </React.Fragment>
        );
    }
}
export default Dashboard