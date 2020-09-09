import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/greetings"
import HoverInfo from "../components/hoverInfo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGitlab,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

// import Image from "../components/image"

import "./index.scss"
import Skills from "../components/skills"

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
        <div className="contacts">
          <a
            href="https://linkedin.com/in/rathod-sahaab"
            target="_blank"
            style={{ color: "#0077B5" }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/rathod-sahaab"
            target="_blank"
            style={{ color: "#323131" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://gitlab.com/rathod-sahaab"
            target="_blank"
            style={{ color: "#FC6D26" }}
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>
          <a
            href="mailto:abhayofficialone@gmail.com"
            target="_blank"
            style={{ color: "#f55" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
    <Skills />
  </Layout>
)

export default IndexPage
