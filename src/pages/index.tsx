import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/greetings"
import HoverInfo from "../components/hoverInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        fontSize: 72,
        fontWeight: 700,
        fontFamily: "Poppins",
      }}
    >
      <Greeting /> I am{" "}
      {HoverInfo(
        "Abhay",
        'Means <b>fearless</b> in <a href="https://en.wikipedia.org/wiki/Hindi">Hindi</a>'
      )}
    </div>
  </Layout>
)

export default IndexPage
