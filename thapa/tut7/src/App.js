import React from 'react';


// exporting App as a component to index.js

function App(){
    let currDate = new Date(2020, 5, 2, 11);
    currDate = currDate.getHours();
    let greetings = "";
    const cssStyle = {};

    if (currDate > 1 && currDate < 12){
      greetings = "Good Morning";
      cssStyle.color = "00b894";
    }else if (currDate >=12 && currDate < 20){
      greetings = "Good Afternoon";
      cssStyle.color = "orange";
    }else if (currDate >=20 && currDate <=24){
      greetings = "Good Night";
      cssStyle.color = "black";
    }


    return (
      <>
      <div>
        <h1>
          Hello sir, <span style={cssStyle}> {greetings} </span>
        </h1>
      </div>
      </>
    )

}

export default App;

