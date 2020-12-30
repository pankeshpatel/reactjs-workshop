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

// Reactjs component
// We will create three components
// first component
// Step 1: heading component - defined in Heading.jsx as a function
// Step 2: import and export it from Heading.jsx
// Step 3: integrate it as jsx tag - <Heading/>

ReactDOM.render(
  <>
    <App/>  
  </>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
