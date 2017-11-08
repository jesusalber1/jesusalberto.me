import React, { Component } from 'react';

export default class Option extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.selectOption(this.props)
  }

  render() {
    return (
      <li className="option" onClick={this.handleClick}>
        <span className="icon">{this.props.icon}</span>
        <p className="question">{this.props.question}</p>
      </li>
    )
  }
}
