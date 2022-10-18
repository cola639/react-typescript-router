import { FC, ReactNode } from 'react'
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'

import routeList from './router/routeList'

import RequireAuth from './router/RequireAuth'
import { baseRoutes, asyncRoutes, RouteMetaObject } from './router'

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

  // const BaseRoute = () => useRoutes(baseRoutes)
  const AsyncRoute = () => useRoutes(asyncRoutes)
  const GetAllRoutes = () => {
    const routes = useRoutes([
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/layout', // layout uri prefix
        element: <AsyncRoute />
      },
      {
        path: '*', // 404
        element: <NotFound />
      }
    ])
    return routes
  }

  // const protectedLayout = (
  //   <RequireAuth>
  //     <LayoutComponent name="test name" />
  //   </RequireAuth>
  // )

  // const hasPermission = () => {}

  // const generateRoute = (routeList: RouteMetaObject[]): any => {
  //   console.log('🚀TCL: >> generateRoute >> routeList', routeList)

  //   return routeList.forEach(element => {
  //     if (element.children?.length) return generateRoute(element.children)
  //     if (element.roles.includes('admin'))
  //       return <Route path={element.path} element={protectedLayout}></Route>

  //     // return <Route path="" element={protectedLayout}></Route>
  //   })
  // }

  return (
    <Router>
      <GetAllRoutes />
    </Router>
  )
}

export default Application
