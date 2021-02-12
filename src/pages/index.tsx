import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

import Welcome from "../sections/index/welcome"
import Skills from "../sections/index/skills"
import About from "../sections/index/about"
import Projects from "../sections/index/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Abhay Raj Singh - rathod-sahaab - GSoC'2020@Inkscape" />
    <Welcome />
    <About />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
