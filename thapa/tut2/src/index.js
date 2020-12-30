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

// how to render multiple lines...

// first method
// ReactDOM.render(
//   <div>
//     <h1>hello world</h1>
//     <h1>Hello Thapa Technical- you are awesome</h1>
//   </div>,
//   document.getElementById('root')
// );

// second method (react v16 + )
// ReactDOM.render(
//   [
//   <h1>hello world</h1>,
//   <h1>Hello Thapa Technical- you are awesome</h1>,
//   <h1>Hello Thapa Technical- you are awesome</h1>
//   ], document.getElementById('root')
// );

//Third method...
ReactDOM.render(
  <>
    <h1>hello world</h1>
    <h1>Hello Thapa Technical- you are awesome</h1>
    <ol>
      <li>name 1</li>
      <li>name 2</li>
      <li>name 3</li>
      <li>name 4</li>
      <li>name 5</li>
    </ol>
  </>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
