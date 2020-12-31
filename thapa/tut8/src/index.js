import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// imported from App.js
// youtuber is a variable

// "language" is a second variable
import youtuber, {language, myName} from "./App";

//importing a function with an argument
import add from "./Calc";


// Or
// import * as variables from "./App";
// Usage: variables.youtuber
//      : variables.youtuber.myName()

ReactDOM.render(
  <>
    <ol>
      <li> Pankesh </li>
      <li>{youtuber}</li>
      <li>{language}</li>
      <li>{myName()}</li>
      <li>{add(40, 4)}</li>

    </ol>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
