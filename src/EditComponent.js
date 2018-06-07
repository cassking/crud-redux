import React, { Component } from 'react'
import { connect } from 'react-redux'


class EditComponent extends Component {
  constructor(props) {
    super(props);
    //new react api for refs
    this.getTitle = React.createRef();
    this.getMessage = React.createRef();

    this.state = {

    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit = (event) =>{
    event.preventDefault()
    const newTitle = this.getTitle.current.value
    const newMessage = this.getMessage.current.value
    const datapayload ={
      newTitle,
      newMessage
    }
    this.props.dispatch({
      type: 'UPDATE',
      id: this.props.post.id,
      datapayload: datapayload
    });


  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleEdit}>
          <input required type="text" ref={this.getTitle}
          defaultValue={this.props.post.title}
          placeholder="enter new title" /><br /><br />
          <textarea required rows="5" ref={this.getMessage}
            defaultValue={this.props.post.message}
            cols="28" placeholder="enter new content" /><br /><br />
            <button>update</button>
        </form>
      </div>
    )
  }
}

export default connect() (EditComponent)
