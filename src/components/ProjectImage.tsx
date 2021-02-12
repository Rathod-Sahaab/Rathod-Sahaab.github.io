import * as React from "react"

import styles from "./ProjectImage.module.scss"

export default function ProjectImage({ project }) {
  return (
    <div className={styles.projectCard}>
      <img
        className={styles.projectImage}
        src={project.gifSrc}
        alt={project.alt}
      />
      <div className={styles.overlay}>
        <h3>{project.projectName}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
