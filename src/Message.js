import React, { Component } from 'react';
import Avatar from './Avatar';
import Line from './Line';
//import Sound from 'react-sound';

export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      waiting: true,
    }
  }

  componentDidMount() {
    this.timer = setTimeout(function() {
      this.setState({
        waiting: false
      })
      if (this.props.showOptions) {
        this.props.showOptions()
      }
    }.bind(this), this.props.waitingTime);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  render() {
    if (this.state.waiting) {
      return null
    } else {
      let lines = this.props.text.map((text, index) => {
        return (<Line text={text} index={index} download={this.props.download} />)
      })
      //const sound = (this.props.isMine) ? <Sound url="notification.m4a" playFromPosition={0} playStatus={Sound.status.PLAYING} /> : undefined

      return (
        <article className={`message-container ${(this.props.isMine) ? 'me' : 'visitor'}`}>
          <div className="message">
            {lines}
          </div>
          <Avatar initial={this.props.initial}/>
        </article>
      )
    }

  }
}
