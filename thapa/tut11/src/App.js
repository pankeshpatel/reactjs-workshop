import react, { useState } from 'react'
import './App.css';

function App() {

  const purple = "#8e44ad";
  const[bg, setBg ] = useState(purple);

  function myClickFunction(){
    //console.log("Clicked");
    let newBg = "yellow";
    setBg(newBg);
  }

  return (
    <div style={{ backgroundColor : bg }}>
      <h1>Event Handling Demos</h1>
      <button onClick={myClickFunction}> Click Me </button>
    </div>
    
  );
}

export default App;
