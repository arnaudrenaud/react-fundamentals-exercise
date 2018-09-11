import React, { Component } from 'react'
import { Counter, Instructions, InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0
    }

    this.setInitialCount = this.setInitialCount.bind(this)
  }

  setInitialCount(initialCount) {
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
        <InitialCountForm setCount={this.setInitialCount} />
        <Counter
          count={this.state.initialCount}
          setCount={this.setInitialCount}
        />
      </div>
    )
  }
}

export default App
