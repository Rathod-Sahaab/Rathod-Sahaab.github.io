import { Link } from "gatsby"
import React from "react"
import "./header.scss"
const Header = () => (
  <header>
    <Link to="/" className="link">
      Scientist | Developer | Humble
    </Link>
    <span className="page-nav">
      <a href="#welcome">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </span>
  </header>
)

export default Header
