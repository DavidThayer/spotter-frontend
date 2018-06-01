import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

class Header extends Component{
  render(){
    return (
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow mb-5">
            <Link className="my-0 mr-md-auto navbar-brand" to={'/'}>Spotter</Link>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to={'/'} className="p-2 text-dark">Home</Link>
            </nav>
            <Link className="btn btn-outline-primary" to={'/deals'}>All Deals</Link>
        </div>

      </header>
    )
  }
}

export default Header