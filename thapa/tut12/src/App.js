import React, { useState } from 'react'


function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
   
  function inputEvent(event){
    //console.log(event.target.value);
    setName(event.target.value);
  }

  function onSubmit(){
    setFullName(name);
  }


  return (
    <>
      <div>
      <h1> Hello {fullName} </h1>
      <input type="text" 
      placeholder ="Enter your name" 
      onChange = {inputEvent} />
      <button onClick={onSubmit}>Click Me</button>
      </div>
    </>
  );
}

export default App;
