import { FC } from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import { baseRoutes, asyncRoutes } from './router'
import routeList from './router/routeList'
import RequireAuth from './router/RequireAuth'

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
    GuestThird
  } = routeList

  const protectedLayout = (
    <RequireAuth>
      <LayoutComponent name="test name" />
    </RequireAuth>
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="layout" element={protectedLayout}>
          <Route path="adminFirst" element={<AdminFirst />} />
          <Route path="adminSecond" element={<AdminSecond />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Application
