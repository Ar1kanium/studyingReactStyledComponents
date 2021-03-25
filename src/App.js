import React from 'react';
import './styling/App.css';
import { Navbar } from './components/Navbar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {


  return (
   
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' />
          </Switch>
        </Router>
        wannad check theme provided
    </>
        

  );
}

export default App;
