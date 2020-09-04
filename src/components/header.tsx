import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1
        style={{
          padding: "1em",
          position: "fixed",
          width: "100vw",
          fontFamily: "Poppins",
          fontWeight: 600,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: "var(--primary-fg-color)",
          }}
        >
          A
        </Link>
      </h1>
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
