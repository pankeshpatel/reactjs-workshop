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

// .heading{
//   color:#fa9191 ;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight:bold;
//   text-shadow: 0px 2px 4px #ffe9c5 ;
// }

//Internal CSS 
// 

//Inline CSS Styling
// This style is reffered as style in JSX.
const heading = {
  color : '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight:'bold',
  textShadow: '0px 2px 4px #ffe9c5'
}


ReactDOM.render(
  <h1 style={heading}>Hello World</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
