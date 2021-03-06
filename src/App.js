import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import PostsContainer from './containers/PostsContainer';
import Footer from './components/Footer';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/results' component={ Result }/>
            <Route path='/deals' component={ PostsContainer }/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
