import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import routeList from '../../router/routeList'
import '../../style/layout.css'

export interface ILayoutComponentProps {
  name?: string
}

const LayoutComponent: FC<ILayoutComponentProps> = ({ name }) => {
  const {
    Login,

    AdminFirst,
    AdminSecond,
    AdminThird,
    GuestFirst,
    GuestSecond,
    GuestThird
  } = routeList
  console.log('prop name >>>', name)

  useCallback(() => {}, [])
  useMemo(() => {}, [])
  useEffect(() => {}, [])

  return (
    <div className="layout">
      {/* <div className="layout_btn">
        recursion menu by judge roles
        <button>Click your authority routes</button>
      </div> */}
      <Outlet />
    </div>
  )
}

export default LayoutComponent
