import React from 'react';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.form={email:"",password:""};
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
        console.log(this.isValid());
    };
    handleChange=(event)=>{
        this.form[event.currentTarget.name]=event.currentTarget.value;
        console.log(this.form);
    };

    render() {

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