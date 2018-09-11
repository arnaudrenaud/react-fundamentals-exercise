import React, { Component } from 'react'
import { Counter, Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0,
      isValid: true
    }

    this.setInitialCount = this.setInitialCount.bind(this)
  }

  setInitialCount(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const initialCount = parseInt(data.get('initialCount'), 10)
    const isValid = Number.isInteger(initialCount)
    this.setState({
      initialCount,
      isValid
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          items={['lol', 'funny', 'ha']}
          shouldDisplayImage={false}
        />
        <form onSubmit={this.setInitialCount}>
          {!this.state.isValid ? <label>Please enter a number</label> : null}
          <input name="initialCount" type="text" />
          <input type="submit" />
        </form>
        <Counter count={this.state.initialCount} />
      </div>
    )
  }
}

export default App
