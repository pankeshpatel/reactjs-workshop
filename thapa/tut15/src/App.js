import React, { useEffect, useState } from 'react';

// useEffect() - this function is used to perform an activity 
// after rendering  

const App = () => {
  const [num, setNum] = useState(0);

  function increment(){
    setNum(num + 1);
  }


// Empty array as a second argument of 
// useEffect() function means --
// when you referesh a button, then this 
// function will be executed.

  useEffect(
     () => {
      alert("I am clicked...");
    }, []);

  return (
    <button onClick={increment}> click me {num} </button>
  );

};

export default App;