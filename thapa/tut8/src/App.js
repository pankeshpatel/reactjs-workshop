import logo from './logo.svg';
import './App.css';

// Exporting youtuber variable
const youtuber = 'thapa technical';

// Exporting second variable
const language = "reactjs";

function myName(){
  let name;
  return name = "My name is Lakhan";
}




// default should be used only for 
// the first variable
export default youtuber;

// exporting the second variable and function 
export {language, myName};


