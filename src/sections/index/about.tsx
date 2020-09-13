import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./about.scss"
const About = () => {
  const query = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "face.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section id="about" className="page">
      <div className="content">
        <div style={{ display: "none" }} className="illustration">
          <div>
            <Img
              style={{ borderRadius: "50%" }}
              fixed={query.image.childImageSharp.fixed}
            />
            <h3>@rathod-sahaab</h3>
          </div>
        </div>
        <div className="description">
          <h2>About</h2>
          <p>
            Hi, thanks for visiting! I am Abhay Raj Singh. I am a programmer
            fairly experienced with <b>C++, Python</b> and <b>full-stack</b>{" "}
            development. But, <i>programmer</i> being the keyword I can handle
            anything you throw at me. I have successfully completed the{" "}
            <b>Google Summer of Code</b> program in 2020 with Inkscape.
          </p>
          <input type="checkbox" id="more-less-toggle" />
          <label htmlFor="more-less-toggle">more...</label>
          <p className="extra">
            I am a fan of Open Source, and I actively contribute to the projects
            I like and am intrested in. I learned programming in my highschool
            and learning about open source was my second enlightenment towards
            programming.
          </p>
          <p className="extra">
            Apart from programming, I like graphic-designing, fitness, sciences
            music and camping. Currently, I am a student at <b>NIT Hamirpur</b>,
            Himachal Pradesh, Bharat(India).
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
