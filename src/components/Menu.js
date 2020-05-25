import React from 'react';
import { Link } from "react-router-dom";
class Menu extends React.Component{

    render() {
        return( <nav className="navbar navbar-expand-lg bg-dark">
                <ul className="navbar-nav">
                <li><Link to="/" className="nav-link">home</Link></li>
                    {   !this.props.logged ?
                        <li><Link to="/login" className="nav-link">login</Link></li>
                        :
                        <li><Link to="/logout" className="nav-link">logout</Link></li>
                    }
                <li><Link to="/dashboard" className="nav-link">dashboard</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Menu;