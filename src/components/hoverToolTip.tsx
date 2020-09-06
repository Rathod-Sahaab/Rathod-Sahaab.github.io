import React, { FunctionComponent } from "react"

import "./hoverToolTip.scss"

const HoverToolTip = (
  VisibleComponent: FunctionComponent,
  ToolTipComponent: FunctionComponent
) => {
  return (
    <div className="hover-parent">
      <VisibleComponent />
      <div className="hover-card">
        <ToolTipComponent />
      </div>
    </div>
  )
}

export default HoverToolTip
