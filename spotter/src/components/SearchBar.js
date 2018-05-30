import React, { Component } from 'react';
import '../index.css'

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this.state.value)
    }
  
    handleSubmit(event) {
      console.log('Searching for: ' + this.state.value);
      event.preventDefault();
    }
  
    
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="hero-input form-inline my-2 my-lg-0">
          <label>
            <input type="text" className="form-control mr-sm-2 hero-form" placeholder="Search make or model. Try 'Nissan'" value={this.state.value} onChange={this.handleChange} aria-label="Search"/>
          </label>
          <input className="btn btn-lg btn-primary my-2 my-sm-0 hero-button" type="submit" value="Submit" />
        </form>
      );
    }
  }

export default SearchBar  