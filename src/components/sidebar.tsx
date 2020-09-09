import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGitlab,
  faAdobe,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faHome, faWrench, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import "./sidebar.scss"
const Sidebar = () => {
  return (
    <div id="sidenav">
      <div className="logo">
        <FontAwesomeIcon icon={faAdobe} />
      </div>
      <div className="position">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faEye} />
        <FontAwesomeIcon icon={faWrench} onClick={() => scrollTo(0, 0)} />
        <FontAwesomeIcon icon={faPhoneAlt} />
      </div>
      <div className="contact">
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
      </div>
    </div>
  )
}

export default Sidebar
