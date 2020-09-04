import React, { Component } from 'react'

export default class MenuItems extends Component {
  state = {}
  
  render() {
    return (
      <div>
        {this.props.options.map((item, index) => <button key={index}>{item.name}</button>)}
      </div>
    )
  }
}
