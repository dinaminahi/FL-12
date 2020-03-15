import React from 'react';
import './../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './HomePage';

function App() {
  return (
    <div className="App">
     {/* <Router>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/add"  component={Add}/>
       </Switch>
     </Router> */}
     <Home />
    </div>
  );
}

export default App;
