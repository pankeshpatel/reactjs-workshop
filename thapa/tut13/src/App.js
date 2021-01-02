import React, { useState } from 'react';
import ToDoLists from './ToDoLists';



function App() {

  // use of hooks
  const [ inputList, setInputList ] = useState("buy apple");

  // hooks with array...
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) =>{
      return [...oldItems, inputList];
    });
    //setInputList("");
  };


  const deleteItem = (id) => {
    console.log("deleted...");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) =>{
          return index != id;
      })
    })
}


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
            <h1> ToDo List</h1>
          <br/>  
            <input type="text" 
                    placeholder="Add Items" 
                    value = {inputList}
                    onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>
            <ol>
              {
                Items.map((itemval, index) => {
                  return (
                  <ToDoLists 
                   key = {index}
                   id = {index}
                   text={itemval} 
                   onSelect = {deleteItem}
                   />);
              })
              }
            </ol>
        </div>
      </div>

    </>
  );
}

export default App;
