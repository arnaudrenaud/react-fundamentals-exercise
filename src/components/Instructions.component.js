import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  renderImage() {
    return this.props.shouldDisplayImage ? (
      <img
        className="instructions__logo"
        src="https://uiuc.hack4impact.org/img/colored-logo.png"
        alt="h4i logo"
      />
    ) : null
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.renderImage()}
      </div>
    )
  }
}

export default Instructions
