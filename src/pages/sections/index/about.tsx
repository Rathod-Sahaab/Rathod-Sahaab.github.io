import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./about.scss"
const About = () => {
  const query = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "face.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
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
        <div className="description">
          <h2>About</h2>
          <p>
            Hi, thanks for visiting! I am Abhay Raj Singh. I am a programmer
            fairly experienced in <b>C++, Python</b> and <b>fullstack</b>{" "}
            development. But, <i>programmer</i> being the keyword I can and I
            will handle anything you throw at me if the problem is interesting
            enough. I have successfully completed the{" "}
            <b>Google Summer of Code</b>, program in 2020.
          </p>
          <p>
            I am a fan of Open Source, and I actively contribute to the projects
            I like and am intrested in. I learned programming in my highschool
            and learning about open source was my second enlightenment towards
            programming.
          </p>
          <p>
            Apart from programming, I like graphic-designing, fitness, sciences
            musinc and camping. Currently, I am a student at <b>NIT Hamirpur</b>
            , Himachal Pradesh, Bharat(India).
          </p>
        </div>
        <div className="illustration">
          <Img
            style={{ borderRadius: "50%" }}
            fixed={query.image.childImageSharp.fixed}
          />
        </div>
      </div>
    </section>
  )
}

export default About
