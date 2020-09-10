import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

import Welcome from "./sections/index/welcome"
import Skills from "./sections/index/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Skills />
  </Layout>
)

export default IndexPage
