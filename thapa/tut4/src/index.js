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

const name = "Pankesh";
const imgName = "https://picsum.photos/200/300";

// JSX attribute
// contentEditable is an attribute of <h1> tag.
// src is an attribute of <img> tag

// JSX CSS style 
// <h1 className="heading">my name is {name}</h1>
// 


ReactDOM.render(
  <>
  <h1 className="heading">my name is {name}</h1>
  <h1 contentEditable = "true"> hello world {name}</h1>
  <div className="img_div">
    <img  src="https://picsum.photos/200/300"/>
    <img src={imgName}/>
  </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
