import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/greetings"
import HoverInfo from "../components/hoverInfo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
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
      </div>
    </div>
  </Layout>
)

export default IndexPage
