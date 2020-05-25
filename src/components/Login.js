import React from 'react';
import {Redirect} from "react-router-dom";

class Login extends React.Component{
    constructor(props) {
        super(props);
        if(this.props.location.pathname==="/logout")
        {    //console.log("logout");
            localStorage.clear();
            this.props.setLogged(false);
        }
        this.form={};
    }
    static validLogin={email:"bourdin.maurice@gmail.com",password:"1983"}
    isValid=()=>{
        return (
            this.form.email===Login.validLogin.email
            &&
            this.form.password===Login.validLogin.password
        );
    };


    handleSubmit=(event)=>{
        event.preventDefault();
        //console.log(this.isValid());
        if(this.isValid())
        {
            localStorage.setItem("token","true");
            this.props.setLogged(true);
        }
    };
    handleChange=(event)=>{
        this.form[event.currentTarget.name]=event.currentTarget.value;
        ////console.log(this.form);
    };


    render() {

        if(this.props.logged===true)
        {
            return (<Redirect to="/Dashboard"/>);
        }
        return(
        <form >
            <label>email</label><input type="email" name="email" onChange={this.handleChange}/>
            <label>password</label><input type="password" name="password" onChange={this.handleChange}/>
            <input type="submit" onClick={this.handleSubmit}/>
        </form>
    );
    }
}

export default Login;