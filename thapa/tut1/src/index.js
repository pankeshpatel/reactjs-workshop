
// To render JSX, we need a React, ReactDOM module 
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

// notes
// <h1>Hello World</h1> - This is a jsx (java script extension, not HTML)
// This jsx has been compiled by babel
// ReactDOM.render() has two arguments
// -- first argument is -- what you want to render (in our case "Hello world")
// -- second argument is -- where do you want to render (we want to render is `index.html` page)


ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
