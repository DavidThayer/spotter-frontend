import React, {Component} from 'react'
import Header from '../components/Header'

class PostsContainer extends Component {
  render(){
    return (
      { Header }
      <div className="postsContainer">
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default PostsContainer