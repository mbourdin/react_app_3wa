import React,{Fragment} from 'react';

//Import du logo dans le script -> n'est pas traité comme un asset externe.
import logo from './images/logo_react_import.png'


import DefaultValue,{MYCONST,ReactStatelessComponent,variable} from './components/ExportComponent';

import * as Module from './components/ExportComponent';


console.log(Module)

console.log(DefaultValue,MYCONST)

console.log(ReactStatelessComponent)

console.log(variable)

function App(props) {
  return (
    <Fragment>
      <ReactStatelessComponent></ReactStatelessComponent>
      <div><img src={logo}/><span className="logo"></span><img src={process.env.PUBLIC_URL + '/images/logo_react_public.png'} /></div>

      test import / export
    </Fragment>
  );
}

export default App;
