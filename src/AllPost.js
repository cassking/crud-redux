import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


class AllPost extends Component {
  constructor() {
    super();
      this.state = {

      }
    }


  render() {

    return(
      <div>
        <h1>All Your stuff here!</h1>
        {/* check to see props being passed from connect */}
        { console.log('this.props.posts', this.props.posts)}
            { this.props.posts.map((post) =>
              <div key={post.id}>
                {post.editing ? <EditComponent post={post} key={post.id} /> :
                <Post key={post.id} post={post} />}
              </div>

            )}

          {/* React.createElement(Post,{ key: post.id, post: post })) */}


            {/* same as
            {this.props.posts.map((post) => <Post key={post.id} post={post} />)} */}


      </div>
    );
  }
}//end of class


const mapStateToProps = (state) =>{
  return {
    posts: state
  }
}
export default connect(mapStateToProps) (AllPost);

// export default AllPost;
