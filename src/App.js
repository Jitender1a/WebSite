import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Service from './components/Service'
import Work from './components/Work'
import PageHeader from './components/PageHeader'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Service' component={Service}/>
            <Route path='/Work' component={Work}/>
            <Route path='/PageHeader' component={PageHeader}/>
        </Switch>
        <Contact/>

      </div>
    );
  }
}

export default App;
