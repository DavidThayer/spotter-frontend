import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import PostsContainer from '../containers/PostsContainer';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
    <div>
        <div className="jumbotron jumbotron-fluid main-image">
            <div className="hero-container">
                <div className="container text-left">
                    <h1>Find your dream car<br />
                        for a price you won't believe.
                    </h1>
                    <SearchBar />
                </div>
            </div>
        </div>
        
        <div className="container">
        <PostsContainer />
        </div>
        <div className="jumbotron jumbotron-fluid">
            <p className="lead">This is where we'll explain how things work with three snazzy icons and text.</p>
            <Link className="btn btn-lg btn-primary" to="/" role="button">View navbar docs</Link>
        </div>
    </div>
    );
  }
}

export default Home;