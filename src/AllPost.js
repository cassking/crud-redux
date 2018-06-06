import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        { console.log(this.props.posts)}
      </div>
    )
  }
}//end of class


const mapStateToProps = (state) =>{
  return {
    posts: state
  }
}
export default connect(mapStateToProps) (AllPost);

// export default AllPost;
