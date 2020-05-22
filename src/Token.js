import React from 'react';
class Token extends React.Component{
    constructor(props) {
        super(props);
        this.tokens=new Map();
        this.style={textAlign :"left"};
    }
    componentDidMount() {

    }

    setTokens=()=>{
        let tokens= new Map();
        let currentSomme=this.props.somme;
        let remaining=0;
        let nombre=0;
        for(let denomination of this.props.denominations)
        {   remaining=currentSomme % denomination;

            nombre=(currentSomme-remaining)/denomination;
            currentSomme=remaining;
            tokens.set(denomination,nombre);
            //console.log(denomination +" "+ nombre +" "+ remaining)
        }
        this.tokens=tokens;
    }
    showTokens=()=>{

        let tokenArray=[];
        let i=0;
        for(let token of this.tokens)
        {
            tokenArray[i]=token;
                i++;
        }
        return (
            <table>
                {
                    tokenArray.map((token)=>{
                        if(token[1]!==0)
                        {
                            return (
                                <tr key={token[0]}><td>token {token[0]}</td><td>: {token[1]}</td> </tr>
                            )
                        }
                        return null
                    })
                }

            </table>
        )

    }
    render(){
        this.setTokens();
        return(
            <React.Fragment>
                <div style={this.style}>{this.showTokens()}</div>
            </React.Fragment>
        );
    }
}

export default  Token;