import React, { FC } from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'

import routeList from './router/routeList'
import RequireAuth from './router/RequireAuth'
import { RouteMetaObject } from './router/index'
import { asyncRoutes } from './router/index'

export interface IApplicationProps {}

const Application: FC<IApplicationProps> = props => {
  const {
    Login,
    LayoutComponent,
    AdminFirst,
    AdminSecond,
    AdminThird,
    GuestFirst,
    GuestSecond,
    GuestThird,
    NotFound
  } = routeList

  const content = () => useRoutes(asyncRoutes)
  const user = 'admin'

  const protectedLayout = (
    <RequireAuth>
      <LayoutComponent name="test name" />
    </RequireAuth>
  )

  // judege auth condition
  // const withAuth = (component: FC) => {
  //   return (
  //     <RequireAuth>
  //       <component />
  //     </RequireAuth>
  //   )
  // }

  // generate routes
  // const generateRoute = routeList => {
  //   routeList.forEach(element => {
  //     if (element.children.length) return <Route></Route>

  //     return <Route path="" element={protectedLayout}></Route>
  //   })
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        {user && <Route path="layout" element={protectedLayout} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Application
