import React, { useState } from 'react';

//const state = useState();
// console.log(state);

// const state = useState();
// let count=1;
// function inCount(){
//     count = count + 1;
//     console.log("clicked");
// }


function App(){

    // `count` variable is initialized to 0, using `useState(0)`
    // `setCount` gives an updated state and pass on to 
    // the `count` variable.
    const [count, setCount] = useState(0);

    function inCount(){
        setCount(count + 1);        
    }

    return(
       <>
        <h1> {count} </h1>
        <button onClick={inCount}>Click Me</button>
       </> 
    );
}

export default App;