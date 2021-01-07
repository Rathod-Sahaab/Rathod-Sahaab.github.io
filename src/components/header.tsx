import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
const Header = () => (
  <header>
    <Link to="/" className="link">
      Scientist | Developer | Humble
    </Link>
    <span className="page-nav">
      <a href="#welcome">
        Home
      </a>
      <a href="#about">
        About
      </a>
      <a href="#skills">
        Skills
      </a>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
