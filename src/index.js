import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import ImportComponent from './importComponent';
import App from './App';

//console.log(process.env);

ReactDOM.render(
  <React.StrictMode>
    {/*<ImportComponent/>*/}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
