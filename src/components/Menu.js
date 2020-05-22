import React from 'react';
import { Link } from "react-router-dom";
class Menu extends React.Component{


    render() {
        return(
                <ul>
                <li><Link to="/">home</Link></li>
                    {   !this.props.logged ?
                        <li><Link to="/login">login</Link></li>
                        :
                        <li><Link to="/logout">logout</Link></li>
                    }
                <li><Link to="/dashboard">dashboard</Link></li>
                </ul>
        );
    }
}
export default Menu;