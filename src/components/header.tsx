import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGitlab,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import "./header.scss"
import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
const Header = () => (
  <header>
    <Link to="/" className="link">
      Scientist | Developer | Humble
    </Link>

    <div className="header-contacts">
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
