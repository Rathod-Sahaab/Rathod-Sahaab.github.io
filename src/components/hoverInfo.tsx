import React from "react"
import HoverToolTip from "./hoverToolTip"

type HoverProps = {
  text: string
  description: string
}

/**
 * Utility function to help with simple text and hover function
 */
const HoverInfo = ({ text, description }: HoverProps) => {
  return HoverToolTip(
    () => {
      return <span className="hoverable-text">{text}</span>
    },
    () => {
      return (
        <div
          className="hoverable-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )
    }
  )
}
export default HoverInfo
