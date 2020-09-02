import React from "react"

class Greeting extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return <span className="hoverable-text">Hi!</span>
  }
}

export default Greeting
