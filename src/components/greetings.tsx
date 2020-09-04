import React from "react"
import HoverInfo from "./hoverInfo"
import greetingMessages from "./greetingMessages"

import "./greetings.scss"

class Greeting extends React.Component<{}, { greeting: any; opacity: number }> {
  timerID: any
  languageSwitchDelay: number
  prevGreetingIndex: number
  constructor(props: any) {
    super(props)
    const random_index = Math.floor(Math.random() * greetingMessages.length)

    this.prevGreetingIndex = random_index
    this.state = {
      greeting: greetingMessages[random_index],
      opacity: 1,
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
    this.setState({
      opacity: 0,
    })
    setTimeout(() => {
      let random_index = Math.floor(Math.random() * greetingMessages.length)

      if (random_index == this.prevGreetingIndex) {
        if (random_index >= greetingMessages.length - 1) {
          random_index = 0
        } else {
          random_index++
        }
      }

      this.prevGreetingIndex = random_index

      this.setState({
        greeting: greetingMessages[random_index],
        opacity: 1,
      })
    }, 250) // same as transition duration from css
  }

  onHover(hovering: boolean) {
    if (hovering) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(() => this.tick(), this.languageSwitchDelay)
    }
  }

  render() {
    const { name, language, link } = this.state.greeting
    return (
      <div
        id="greeting"
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}
        style={{
          opacity: this.state.opacity,
        }}
      >
        <HoverInfo
          text={`${name}!`}
          description={`Hello equivalent in <a href="${link}">${language}</a>`}
        />
      </div>
    )
  }
}

export default Greeting
