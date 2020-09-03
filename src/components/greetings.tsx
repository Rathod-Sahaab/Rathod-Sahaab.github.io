import React from "react"
import HoverInfo from "./hoverInfo"
import greetingMessages from "./greetingMessages"

class Greeting extends React.Component<{}, { greeting: any }> {
  timerID: any
  languageSwitchDelay: number
  constructor(props: any) {
    super(props)
    let random_index = Math.random() * greetingMessages.length
    random_index = Math.floor(random_index)
    this.state = {
      greeting: greetingMessages[random_index],
    }
    this.languageSwitchDelay = 3000
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), this.languageSwitchDelay)
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

  onHover(hovering: boolean) {
    if (hovering) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(() => this.tick(), this.languageSwitchDelay)
    }
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}
        style={{ fontSize: 72, fontFamily: `Poppins`, fontWeight: 700 }}
      >
        <HoverInfo
          text={`${this.state.greeting.name}!`}
          description={`Hello equivalent in <a href="${this.state.greeting.link}">${this.state.greeting.language}</a>`}
        />
      </div>
    )
  }
}

export default Greeting
