import React, { Component } from 'react'
import { Counter, Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0
    }

    this.setInitialCount = this.setInitialCount.bind(this)
  }

  setInitialCount(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const initialCount = parseInt(data.get('initialCount'), 10)
    this.setState({
      initialCount
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
          <input name="initialCount" type="number" />
          <input type="submit" />
        </form>
        <Counter count={this.state.initialCount} />
      </div>
    )
  }
}

export default App
