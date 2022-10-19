import { FC } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { filterAsyncRoutes } from './router/filterRoutes'
import routeList from './router/routeList'
import { asyncRoutes } from './router'

export interface IApplicationProps {}

const Application: FC<IApplicationProps> = props => {
  const { Login, NotFound } = routeList

  const role = 'guest' // 'guest' || 'admin'
  const FilterRoutes = filterAsyncRoutes(asyncRoutes, role)
  console.log('🚀TCL: >> FilterRoutes', JSON.stringify(FilterRoutes))

  const AsyncRoute = () => useRoutes(FilterRoutes)
  const GetAllRoutes = () =>
    useRoutes([
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/layout/*', // layout uri prefix
        element: <AsyncRoute />
      },
      {
        path: '/', // layout uri prefix
        element: <AsyncRoute />
      },
      {
        path: '*', // 404
        element: <NotFound />
      }
    ])

  return (
    <BrowserRouter>
      <GetAllRoutes />
    </BrowserRouter>
  )
}

export default Application
