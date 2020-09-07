import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"
const Header = () => (
  <header>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        color: "var(--primary-fg-color)",
      }}
    >
      Scientist | Developer | Humble
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
