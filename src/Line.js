import React, { Component } from 'react';
const regexURL = /\b(https?:\/\/)\S+/;
const regexMailto = /\b(mailto:)\S+/;

export default class Line extends Component {
  render() {
    let text;
    const testURL = this.props.text.match(regexURL)
    const testMailto = this.props.text.match(regexMailto)

    if (testURL) {
      text = (<a href={`${testURL[0]}`} target='_blank'>{this.props.text}</a>)
    } else if (testMailto) {
      text = (<a href={`${testMailto[0]}`}>{`${this.props.text.slice(0, this.props.text.indexOf('mailto:'))} ${this.props.text.slice(this.props.text.indexOf('mailto:') + 'mailto:'.length)}`}</a>)
    } else {
      text = this.props.text
    }

    const line = (<p key={this.props.index}>{text}</p>)

    if (this.props.download) {
      return [line, (<p key={this.props.index+1}><a href={`${this.props.download.file}`} download><img src={`${this.props.download.img}`} alt={`${this.props.download.alt}`}/></a></p>)]
    }
    return line
  }
}
