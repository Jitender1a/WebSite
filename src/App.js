import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Service from './components/Service'
import Work from './components/Work'



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/About' component={About}/>
            <Route path='/Service' component={Service}/>
           <Route path='/Work' component={Work}/>
        </Switch>
      </div>
    );
  }
}

export default App;
