import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link className="my-0 mr-md-auto navbar-brand" to={'/'}>Spotter</Link>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to={'/deals'} className="p-2 text-dark">Top Deals</Link>
            </nav>
            <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>

      </header>
    )
  }
}

export default Header