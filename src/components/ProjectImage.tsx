import * as React from "react"

import styles from "./ProjectImage.module.scss"

import { isTouchDevice } from "../utils/device"

export default function ProjectImage({ project }) {
  return (
    <div
      className={styles.projectCard}
      onClick={() => {
        window.location.assign(project.link)
      }}
    >
      <img
        className={styles.projectImage}
        src={project.gifSrc}
        alt={project.alt}
      />
      <div
        className={`${styles.overlay} ${isTouchDevice() ? styles.touch : ""}`}
      >
        <h3>{project.projectName}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
