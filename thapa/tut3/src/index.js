import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const  name = 'World';
const fname = "Pankesh";
const lname = "Patel";
const currentDate = new Date().getDate();

ReactDOM.render(
  <>
  <h1> Hello {name} {fname} {lname} </h1>
  <h1> Hello {name} {fname + ' ' + lname} </h1>
  <h1> Hello {name} {`${fname}  ${lname}`} </h1>
  <h1> The expression is {2 + 3} </h1>
  <h1> The expression is {Math.random()} </h1>
  <h1> The current date is  {currentDate} </h1>
  </>,
  document.getElementById('root')
);

// you can use only expression, e.g., 2 + 3 
//You can not use "statement ". For instance
// {
    //  if (a > b)
    //  {
    //    console.log("Logical Expression")
    //  }
//}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
