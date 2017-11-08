import React, { Component } from 'react';

export default class Avatar extends Component {
  render() {
    return (
      <div className="avatar"><i className="letter">{this.props.initial}</i></div>
    )
  }
}
