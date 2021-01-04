import React from 'react';
// Step 4: import components
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import Menu from './Menu';



const App = () => {
  const Name = () => {
    return <h1> Hello, I am on the Name Page... </h1>
  };

  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/contact/name" component={Name}/>
      <Route component= {Error} />
    </Switch>
    </>
  );
}; 

export default App;