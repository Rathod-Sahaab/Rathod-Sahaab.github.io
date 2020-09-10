import React from "react"

import Greeting from "../../../components/greetings"
import HoverInfo from "../../../components/hoverInfo"
import Contacts from "../../../components/contacts"

import "./welcome.scss"

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="page"
      style={{
        fontFamily: "Poppins",
        paddingLeft: "10vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <Greeting />
        <div id="one-liner">
          I am{" "}
          <HoverInfo
            text="Abhay"
            description={
              'Means <b>fearless</b> in <a href="https://en.wikipedia.org/wiki/Hindi">Hindi</a>'
            }
          />
          , I am a Developer
        </div>
        <Contacts />
      </div>
    </section>
  )
}

export default Welcome
