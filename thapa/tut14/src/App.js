import React, { createContext } from 'react';
import ComA from './ComA';
//import ComC from './ComC';


// App.js wants to pass Data to ComC (Component C).
// The following creates context.
const FirstName = createContext();
const LastName = createContext();


const App = () => {
  return (
    <>
      <FirstName.Provider value={"Pankesh"} >
      <LastName.Provider value={"Patel"}>
        <ComA />
      </LastName.Provider>  
      </FirstName.Provider>
      
    </>
  );
};

export default App;
export {FirstName, LastName};