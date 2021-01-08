import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
   <div className="App">    
     <Header/>
     <TinderCards/>
     <SwipeButtons />
   </div>
  );
}

export default App;
