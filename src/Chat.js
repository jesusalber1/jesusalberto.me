import React, { Component } from 'react';
import Step from './Step';
import _ from 'lodash';

export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstStep: false,
      renderedSteps: [],
      optionsLeft: this.props.steps.options,
      showOptions: false
    }
    this.updateOptions = this.updateOptions.bind(this)
    this.showOptions = this.showOptions.bind(this)
  }

  updateOptions(toRemove) {
    const newOptions = this.state.optionsLeft
    _.remove(newOptions, (option) => option.question === toRemove.question)
    this.setState({
      optionsLeft: newOptions,
    })
  }

  showOptions() {
    if (this.state.optionsLeft.length) { // Show options if there's any left
      this.setState({
        renderedSteps: [...this.state.renderedSteps, <Step key={this.state.renderedSteps.length} options={this.state.optionsLeft} initialQuestion={this.props.visitor} initialAnswer={this.props.me} updateOptions={this.updateOptions} showOptions={this.showOptions} />]
      })
    } else { // show bye bye message
      this.setState({
        renderedSteps: [...this.state.renderedSteps, <Step key={this.state.renderedSteps.length} messages={this.props.steps.bye.messages} isMine={true} initial={this.props.me} />]
      })
    }
  }

  componentWillMount() {
    this.setState({
      renderedSteps: [...this.state.renderedSteps, <Step key={this.state.renderedSteps.length} messages={this.props.steps.intro.messages} isMine={true} initial={this.props.me} showOptions={this.showOptions} />]
    })
  }

  prettyTime(time) {
    const hours = (time.getHours() < 10) ? `0${time.getHours()}` : time.getHours()
    const minutes = (time.getMinutes() < 10) ? `0${time.getMinutes()}` : time.getMinutes()
    return `${hours}:${minutes}`
  }

  render() {
    return (
      <div id="chat-container" ref={(refs) => this.refs = refs }>
        <time className="start">Today, {this.prettyTime(this.props.time)}</time>
        {this.state.renderedSteps}
      </div>
    )
  }
}
