import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../index.css'

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
        //   toResults: false,
          myRedirect: false,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this.state.value)
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for: ' + this.state.value);
        fetch(`http://localhost:8080/api/posts?q=${this.state.value}`)
            .then(response => response.json())
            .then(myJson => console.log(myJson))
            .then(this.setState({myRedirect: true})) //can I do this only if there is a result for the search?
            .catch(err => console.log(err));
        
    }
  
    
    render() {
        if (this.state.myRedirect === true) {
            return <Redirect to={{pathname: '/results/', state: this.state.value}} />
        }
      return (
        <form onSubmit={this.handleSubmit} className="hero-input form-inline my-2 my-lg-0">
          <label>
            <input type="text" className="form-control mr-sm-2 hero-form" placeholder="Search make or model. Try 'Tesla'" value={this.state.value} onChange={this.handleChange} required aria-label="Search"/>
          </label>
          <input className="btn btn-lg btn-primary my-2 my-sm-0 hero-button" type="submit" value="Submit" />
        </form>
      );
    }
  }

export default SearchBar