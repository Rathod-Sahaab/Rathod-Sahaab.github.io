/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Sidebar from "./sidebar"
import Header from "./header"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import RSC from "react-scrollbars-custom"

// Fix huge icon flash: https://github.com/FortAwesome/react-fontawesome/issues/234
config.autoAddCss = false

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <RSC id="scroll" style={{ width: "100vw", height: "100vh" }}>
        <main>{children}</main>
      </RSC>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
