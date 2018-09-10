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

  renderItems() {
    const itemsRendered = this.props.items
      .filter(item => item.length >= 3)
      .map((item, i) => (i % 2 ? item : item.toUpperCase()))
      .map((item, i) => <li key={i}>{item}</li>)
    return <ul>{itemsRendered}</ul>
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.renderImage()}
        {this.renderItems()}
      </div>
    )
  }
}

export default Instructions
