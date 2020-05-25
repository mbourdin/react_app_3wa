import React from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const { children, ...rest } = this.props;
        const token = localStorage.getItem('token') === 'true';
        return (
            <Route
                { ...rest }
                render={ (rest) =>
                    token ? this.props.children
                        :
                        <Redirect
                            to="/login"
                        />
                }
            />
        );
    }
}

export default PrivateRoute