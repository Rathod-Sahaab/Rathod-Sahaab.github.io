import React from "react"
import ProjectImage from "../../components/ProjectImage"
import ElideGif from "../../images/projects/elide-app.gif"

import "./projects.scss"

const projects = [
  {
    projectName: "elide",
    gifSrc: ElideGif,
    alt: "Elide projects screen recording",
    description:
      "A website that simplifies urls and their management, it can be used to shorten, schedule URLs, point single url to multiple locations, get crucial statistics and much more. Cherry on the cake is it's open source!",
    link: "https://console.elide.me",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="page">
      <div className="content">
        <div className="description">
          <h2>Projects</h2>
          <div className="projects-holder">
            {projects.map((project, index) => {
              return <ProjectImage key={index} project={project} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
