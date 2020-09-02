import React from "react"
import HoverInfo from "./hoverInfo"
import greetingMessages from "./greetingMessages"

class Greeting extends React.Component<{}, { greeting: any }> {
  greeting: any
  timerID: any
  constructor(props: any) {
    super(props)
    let random_index = Math.random() * greetingMessages.length
    random_index = Math.floor(random_index)
    this.state = {
      greeting: greetingMessages[random_index],
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    let random_index = Math.random() * greetingMessages.length
    random_index = Math.floor(random_index)
    this.setState({
      greeting: greetingMessages[random_index],
    })
  }

  render() {
    return (
      <div style={{ fontSize: 72, fontFamily: `Poppins`, fontWeight: 700 }}>
        {HoverInfo(
          `${this.state.greeting.name}!`,
          `Hello equivalent in <a href="${this.state.greeting.link}">${this.state.greeting.language}</a>`
        )}
      </div>
    )
  }
}

export default Greeting
