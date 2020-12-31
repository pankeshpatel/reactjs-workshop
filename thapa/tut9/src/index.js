import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import Cdata from './Cdata';

// props is an object with properties 



// Here Card is an elment 
// imgsrc is a custome "properties" (Props) of Card
// 

ReactDOM.render(
  <>
  <h1 className="heading">List of top Series in 2020</h1>
  <Card 
    imgsrc={Cdata[0].isrc}
    title = {Cdata[0].sname}
    sname = {Cdata[0].span}
    link={Cdata[0].link} 

  />

  <Card 
    imgsrc={Cdata[1].isrc}
    title = {Cdata[1].sname}
    sname = {Cdata[1].span}
    link={Cdata[1].link}     
  />

<Card 
    imgsrc={Cdata[2].isrc}
    title = {Cdata[2].sname}
    sname = {Cdata[2].span}
    link={Cdata[2].link}     
  />  
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
