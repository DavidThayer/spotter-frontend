import React, { Component } from 'react';
import '../index.css'

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
        //   toResults: false,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this.state.value)
    }
  
    handleSubmit(event) {
        event.preventDefault();
        console.log('Searching for: ' + this.state.value);
        fetch(`http://localhost:8080/api/posts?q=${this.state.value}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
            });
        // fetch get
        // setstate to toResults: True
    }
  
    
    render() {
        // if (this.state.toResults === true) {
        //     return <Redirect to='/deals/' + this.state.value />
        // }
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