import React, { Component } from 'react';
import Message from './Message';
import Options from './Options';

export default class Step extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: this.props.options, // it dissapears when option selected
      showOptions: !!this.props.options
    }
    this.selectOption = this.selectOption.bind(this)
  }

  selectOption(option) {
    this.setState({
      options: undefined,
      messages: option.messages,
      answer: option.answer,
      download: option.download
    })
    this.props.updateOptions(option)
  }

  render() {
    let content = []
    // normal message (no options)
    if (this.props.messages) {
      content = this.props.messages.map((message, index) => {
        return <Message
                  key={index}
                  text={message}
                  initial={this.props.initial}
                  isMine={this.props.isMine}
                  waitingTime={1000*(1+index)}
                  showOptions={(index === this.props.messages.length-1) ? this.props.showOptions : undefined} />
        })
    } else { // option selection (and messages)
      // show options
      if (this.state.options && this.state.showOptions) {
        content = <Options
                    optionList={this.state.options}
                    selectOption={this.selectOption}
                    waitingTime={1000} />
      } else {
        // option selected -> show message of selection and answer
        const messages = this.state.messages.map((message, index) => {
          return <Message
                    key={index}
                    text={message}
                    initial={this.props.initialQuestion}
                    isMine={false}
                    waitingTime={0} />
          })
        const answers = this.state.answer.map((message, index) => {
            return <Message
                      key={index + content.length}
                      text={message}
                      initial={this.props.initialAnswer}
                      isMine={true}
                      download={this.state.download}
                      waitingTime={1500*(1+index)}
                      showOptions={(index === this.state.answer.length-1) ? this.props.showOptions : undefined} />
        })
        content = [messages, answers]
      }
    }

    return (
      <section className='step'>
        {content}
      </section>
    )
  }
}
