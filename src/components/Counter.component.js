import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
  }

  static get defaultProps() {
    return {
      count: 1
    }
  }

  increment = () => {
    this.props.setCount(this.props.count + 1)
  }

  decrement = () => {
    this.props.setCount(this.props.count - 1)
  }

  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
