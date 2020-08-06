import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Experience from './components/Experience.js'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/experience" component={Experience}/>
            {/* <Route path="/projects" component={Projects}/> */}

          </Switch>
        </div> 
      </BrowserRouter>        
    </div>
  );
}

export default App;
