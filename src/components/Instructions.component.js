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
    let itemsRendered = []
    for (let i = 0; i < this.props.items.length; i += 1) {
      const item = this.props.items[i]
      if (item.length >= 3) {
        const itemFormatted = i % 2 === 1 ? item : item.toUpperCase()
        itemsRendered.push(<li key={i}>{itemFormatted}</li>)
      }
    }
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
