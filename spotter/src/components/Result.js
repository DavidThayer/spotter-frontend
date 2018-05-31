import React, { Component } from 'react';
import Header from '../components/Header'

class Result extends Component {
    state = {
        value: null,
    }

    componentDidMount() {
        // this.setState({
        //     value: this.props.history.location.state
        // })
        fetch(`http://localhost:8080/api/posts?q=${this.props.history.location.state}`)
            .then(response => response.json())
            // .then(myJson => console.log("API RESULT", myJson[0]))
            .then(myJson => {
                if (myJson.error) {
                    this.setState({status: 'No results found, please try another search.'})
                } else {
                    this.setState({value: myJson})
                }
            })
            .catch(err => console.log('error', err));
    }

    render() {
        console.log('Results State = ', this.state.value)
        // let results;
        let results = this.state.value
        ? this.state.value.map(post => {
                if (this.state.value !== null) {
                return (
                    <div key={post._id}>
                    <div className="card mb-4 box-shadow">
                    <div className="card-body card-size">
                    <div className="card-clip-div">
                    <img src={post.image} className="img-responsive img-size" alt="car"/>
                    <p><small>New {post.year} {post.make}</small></p>
                    <h3 className="card-title pricing-card-title">{post.model}</h3>
                    <h3 className="card-title pricing-card-title">${post.lease_price} <small className="text-muted">/ mo</small></h3>
                    <ul className="list-unstyled mt-3 mb-4">
                    {/* <li>{post.trim}</li> */}
                    <li>{post.lease_term} month lease</li>
                    <li>${post.due_at_sign} due at signing</li>
                    <li>{post.dealership}</li>
                    <li>Expires {post.expiration_date}</li>
                    </ul>
                    <a class="btn btn-lg btn-block btn-primary" href={post.website} role="button">View Deal</a>
                    {/* <button type="button" className="btn btn-lg btn-block btn-primary">details</button>  */}
                    </div> 
                    </div>
                </div>
            </div>
                )
            } else {
                results = <h3>Loading</h3>
            }
            })
            : <h3 className="mb-4"><a className="navbar-brand" href="/"> {this.state.status} </a></h3>
            
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="container">
                        <div className="card-deck mb-3">
                            { results }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;
