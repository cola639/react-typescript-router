import { RouteObject } from 'react-router' // route interface
import { Navigate } from 'react-router-dom'
import routeList from './routeList'

// extend interface RouteObject
export interface RouteMetaObject extends RouteObject {
  children?: RouteMetaObject[]
  meta?: { title: string; icon: string }
  roles?: string[]
}

const {
  LayoutComponent,
  AdminFirst,
  AdminSecond,
  AdminThird,
  GuestFirst,
  GuestSecond,
  GuestThird
} = routeList

export const asyncRoutes: RouteMetaObject[] = [
  {
    path: '',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="/layout/adminFirst" replace />,
        roles: ['admin']
      },
      {
        path: 'adminFirst',
        element: <AdminFirst />,
        meta: { title: 'adminFirst', icon: 'dashboard' },
        roles: ['admin']
      },
      {
        path: 'adminSecond',
        element: <AdminSecond />,
        meta: { title: 'adminSecond', icon: 'dashboard' },
        roles: ['admin']
      },
      {
        path: 'adminThird',
        element: <AdminThird />,
        meta: { title: 'adminThird', icon: 'dashboard' },
        roles: ['admin']
      },
      {
        path: '',
        element: <Navigate to="/layout/guestFirst" replace />,
        roles: ['guest']
      },
      {
        path: 'guestFirst',
        element: <GuestFirst />,
        meta: { title: 'guestFirst', icon: 'dashboard' },
        roles: ['admin', 'guest']
      },
      {
        path: 'guestSecond',
        element: <GuestSecond />,
        meta: { title: 'guestSecond', icon: 'dashboard' },
        roles: ['admin', 'guest']
      },
      {
        path: 'guestThird',
        element: <GuestThird />,
        meta: { title: 'guestThird', icon: 'dashboard' },
        roles: ['admin', 'guest']
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
        roles: ['admin', 'guest']
      }
    ],
    roles: ['admin', 'guest']
  }
]
