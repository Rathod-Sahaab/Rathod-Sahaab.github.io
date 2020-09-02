import React from "react"
import "./hoverInfo.scss"

const HoverInfo = (text: string, description: string) => {
  return (
    <span className="hoverable-text">
      {text}
      <div
        className="hoverable-desc"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </span>
  )
}
export default HoverInfo
