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
        fontFamily: "Poppins",
      }}
      className="page"
    >
      <Greeting />I am{" "}
      <HoverInfo
        text="Abhay"
        description={
          'Means <b>fearless</b> in <a href="https://en.wikipedia.org/wiki/Hindi">Hindi</a>'
        }
      />
    </div>
  </Layout>
)

export default IndexPage
