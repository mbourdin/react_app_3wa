//Import de React est obligatoire pour utiliser du JSX
import React,{Component} from 'react';

//Export defaut
export default "value"


//Exporter une class ES6
export class ImportClass{
  constructor() {
    this._content = null;
  }
  get content(){
    return(this._content)
  }
  set content(value){
    this._content = value;
  }
}

//Exporter un stateless component
export const ReactStatelessComponent = (props)=>{
  return(
    <div className="stateless_component"></div>
  )
}

//Exporter un composant React
export class ReactClass extends Component{
  render(){
    return(<div className="class_component"></div>)
  }
}

//Exporter une fonction
export function fonction(){
  console.log("fonction");
  return(true);
}
export let variable="value";

const MYCONST = 2;
export {MYCONST}
