import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import '../../style/layout.css'

export interface ILayoutComponentProps {}

const LayoutComponent: FC<ILayoutComponentProps> = ({}) => {
  useCallback(() => {}, [])
  useMemo(() => {}, [])
  useEffect(() => {}, [])

  return (
    <div className="layout">
      <div className="layout_btn">
        {/* recursion menu by judge roles */}
        <button>Click your authority routes</button>
      </div>

      {/* <div className="layout_img">
        <img style={{ display: avatar ? 'block' : 'none' }} src={avatar} />
      </div>

      <p className="layout_content">{msg}</p> */}
    </div>
  )
}

export default LayoutComponent
