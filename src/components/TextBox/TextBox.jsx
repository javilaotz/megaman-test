import React, { Component } from 'react'

export default class TextBox extends Component {
  state = {
    inputText: null,
  }

  inputHandler = e => {
    console.log(e.target.value)
    this.setState({inputText: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputHandler}/>
      </div>
    )
  }
}
