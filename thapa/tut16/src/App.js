import React from 'react';
// Step 4: import components
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';





const App = () => {
  const Name = () => {
    return <h1> Hello, I am on the Name Page... </h1>
  };

  // React Route component method

  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={() =>  <About name={"about"}/>}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/contact/name" component={Name}/>
      <Route exact path="/user/:name" component={User}/>
      <Route exact path="/user/:fname/:lname" component={User}/>
      <Route component= {Error} />
    </Switch>
    </>
  );
}; 

export default App;