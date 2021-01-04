import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1:Install react-router-dom 
// using command `npm install --save react-router-dom`
// Step 2: Import {BrowserRouter}, as follows
import {BrowserRouter} from 'react-router-dom' ; 

// Step 3: use component <BrowserRouter> ... </BrowserRouter>
// Step 4: Refer App.js for Step 4.

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
