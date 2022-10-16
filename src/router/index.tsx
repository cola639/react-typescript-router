import { RouteObject } from 'react-router' // route interface
import routeList from './routeList'

// extend interface RouteObject
interface RouteMetaObject extends RouteObject {
  children?: RouteMetaObject[]
  meta?: { title: string; icon: string }
  roles?: string[]
}

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

export const baseRoutes: RouteMetaObject[] = [
  {
    path: '/',
    element: <Login />,
    children: []
  }
]

export const asyncRoutes: RouteMetaObject[] = [
  {
    path: '/layout',
    element: <LayoutComponent />,
    children: [
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
      }
    ]
  }
]
