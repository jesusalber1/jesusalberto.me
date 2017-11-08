import React, { Component } from 'react';
import Option from './Option';

export default class Options extends Component {
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
    }
    // There was an answer -> remove other options and write answer
    const options = this.props.optionList.map((option, index) => {
      return <Option
                key={index}
                icon={option.icon}
                question={option.question}
                messages={option.messages}
                answer={option.answer}
                download={option.download}
                selectOption={this.props.selectOption} />
    })

    return (
      <article className="message-container action">
        <ul className="options main-options">
          {options}
        </ul>
      </article>
    )
  }
}
