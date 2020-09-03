import React from "react"
import "./hoverInfo.scss"
type HoverProps = {
  text: string
  description: string
}

const HoverInfo = ({ text, description }: HoverProps) => {
  return (
    <span className="hoverable-text">
      {text}
      <div
        className="hoverable-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </span>
  )
}
export default HoverInfo
