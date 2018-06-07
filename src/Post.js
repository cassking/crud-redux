import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(){
    super()
    this.state ={

    }

  }
  render(){
    return(
      <div>
        <h2>
          {this.props.post.title}
        </h2>
        <p>
          {this.props.post.message}
        </p>
        <button onClick={ ()=>this.props.dispatch({type: 'DELETE_POST',id: this.props.post.id}) }>Delete Me</button>
      <button onClick={ ()=>this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id})}>Edit Me</button>
      </div>

    )
  }
}
export default connect() (Post);
// export default Post;
