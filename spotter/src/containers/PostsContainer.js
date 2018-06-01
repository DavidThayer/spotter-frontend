import React, {Component} from 'react'
import Header from '../components/Header'

class PostsContainer extends Component {

  state = {
    posts: null,
  }

  componentDidMount() {
    // fetch('http://localhost:8080/api/posts')
    fetch('https://tryspotter-backend.herokuapp.com/api/posts')
      .then(res => res.json())
      .then(posts => {
        // console.log(posts);
        this.setState({ posts })
      })
      .catch(err => console.log(err));
  }

  render(){
    console.log("render state = ", this.state.posts)
    const result = this.state.posts
    ? this.state.posts.map(post => {
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
              {/* <button type="button" className="btn btn-lg btn-block btn-primary">details</button> */}
              </div>
              </div>
            </div>
        </div>
      )
    })
    : <h3>Loading...</h3>
    return (
        <div className="PostsContainer">
            <Header />
            <div className="row">
              <div className="container">
                <div className="card-deck mb-3">
                    {result}
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default PostsContainer