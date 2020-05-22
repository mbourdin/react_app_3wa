import React from 'react';
import Token from "./Token";
class Denomination extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            somme:1,
        };
    }
    setSum=(event)=>{
        //console.log(event.currentTarget.value);
        if(event.currentTarget.value>0  && Number.isInteger(Number.parseFloat(event.currentTarget.value)))
        {   this.somme=event.currentTarget.value;
        }

    }
    convert=()=>{
        this.setState({somme:this.somme});
    }
    render(){
        return(
            <React.Fragment>
            <div>
                <label>Somme</label><input name="somme" type="number"  min="1" onChange={this.setSum}/>
                <button onClick={this.convert}>convertir</button>
            </div><Token somme={this.state.somme} denominations={this.props.denominations} />
            </React.Fragment>
        );
    }
}

export default  Denomination;