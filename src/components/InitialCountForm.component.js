import React, { Component } from 'react'

class InitialCountForm extends Component {
  setInitialCount = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    const initialCount = parseInt(data.get('initialCount'), 10)
    this.props.setCount(initialCount)
  }

  render() {
    return (
      <form onSubmit={this.setInitialCount}>
        <input name="initialCount" type="number" />
        <input type="submit" />
      </form>
    )
  }
}

export default InitialCountForm
