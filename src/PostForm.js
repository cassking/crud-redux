import React, { Component } from 'react';

class PostForm extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

render() {
  return(
    <div>

      <h1>add some content here:</h1>
      <form>
        <input required type="text" placeholder="enter a title here"/><br />
        <textarea required rows="5" cols="28" placholder="enter some awesome schtuff here" /><br />
        <button>Post that sucker!</button>


      </form>
    </div>
  )
}

}

export default PostForm;
