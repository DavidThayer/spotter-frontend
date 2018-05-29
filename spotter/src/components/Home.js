import React, { Component } from 'react';
import '../index.css'

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
                    <form className="hero-input form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 hero-form" type="text" placeholder="Search make, model, or type" aria-label="Search" />
                        <button className="btn btn-lg btn-primary my-2 my-sm-0 hero-button" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
        
        <div className="container">
        <div className="row">
            <div className="container">
                <div className="card-deck mb-3">
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <img src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2b3b6920a254052a14201e24be09a7cc.png" className="img-fluid" alt="Responsive image"/>
                            <p><small>New 2018 Volkswagen</small></p>
                            <h3 className="card-title pricing-card-title">Passat 2.0T SE</h3>
                            <h3 className="card-title pricing-card-title">$114 <small className="text-muted">/ mo</small></h3>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>24 month lease</li>
                            <li>$4,749 due at signing</li>
                            <li>Volkswagen of Oakland</li>
                            <li>Expires 5/31/18</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">View deal</button>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <img src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2b3b6920a254052a14201e24be09a7cc.png" className="img-fluid" alt="Responsive image"/>
                            <p><small>New 2018 Volkswagen</small></p>
                            <h3 className="card-title pricing-card-title">Passat 2.0T SE</h3>
                            <h3 className="card-title pricing-card-title">$114 <small className="text-muted">/ mo</small></h3>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>24 month lease</li>
                            <li>$4,749 due at signing</li>
                            <li>Volkswagen of Oakland</li>
                            <li>Expires 5/31/18</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">View deal</button>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <img src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2b3b6920a254052a14201e24be09a7cc.png" className="img-fluid" alt="Responsive image"/>
                            <p><small>New 2018 Volkswagen</small></p>
                            <h3 className="card-title pricing-card-title">Passat 2.0T SE</h3>
                            <h3 className="card-title pricing-card-title">$114 <small className="text-muted">/ mo</small></h3>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>24 month lease</li>
                            <li>$4,749 due at signing</li>
                            <li>Volkswagen of Oakland</li>
                            <li>Expires 5/31/18</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">View deal</button>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
        </div>

    </div>
    );
  }
}

export default Home;