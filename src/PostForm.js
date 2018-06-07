import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostForm extends Component {
  constructor(props) {
    super(props);
    //new react api for refs
    this.getTitle = React.createRef();
    this.getMessage = React.createRef();

    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = ( event ) => {
    event.preventDefault()
  //new way to call refs. wiht api... current.value
    const title = this.getTitle.current.value
    const message = this.getMessage.current.value
    const datapayload = {
      editing: false,
      id: new Date(),//unique id to edit and delete
      title,
      message
    }
    console.log(datapayload)
    //with the connect below we can now pass dispatch as props
    this.props.dispatch({
      type: 'ADD_POST',
      datapayload
    });
    this.getTitle.current.value = ''
    this.getMessage.current.value = ''
  }

render() {
  return(
    <div className="post-container">

      <h1 className="post_heading">add some content here:</h1>
      <form className="form" onSubmit={this.handleSubmit}>
        <input required type="text"
          ref={this.getTitle}
          value={this.state.title}
          //can still get refs with callback below
          //optional
          // ref={ (input) => this.getTitle = input }
          placeholder="enter a title here"/>
          <br />          <br />

        <textarea required
          ref={this.getMessage}
          //can still get refs with callback below
          //optional, i find the new api much easier
          // ref={ (input) => this.getMessage = input}
          rows="5" cols="28" placholder="enter some awesome schtuff here" /><br />
        <button>Post that sucker!</button>

      </form>
    </div>
  )
}

}
export default connect() (PostForm);

// export default PostForm;
