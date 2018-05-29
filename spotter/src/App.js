import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import PostsContainer from './containers/PostsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/deals' component={ PostsContainer }/>
        </Switch>
      </div>
    );
  }
}

export default App;
