import { RouteObject } from 'react-router' // route interface
import routeList from './routeList'

// extend interface RouteObject
export interface RouteMetaObject extends RouteObject {
  children?: RouteMetaObject[]
  meta?: { title: string; icon: string }
  roles: string[]
}

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

export const baseRoutes: RouteMetaObject[] = [
  {
    path: '/login',
    element: <Login />,
    children: [],
    roles: ['admin', 'guest']
  },
  {
    path: '/',
    element: <Login />,
    children: [],
    roles: ['admin', 'guest']
  },
  {
    path: '/*',
    element: <NotFound />,
    children: [],
    roles: ['admin', 'guest']
  }
]

export const asyncRoutes: RouteMetaObject[] = [
  {
    path: '',
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
    ],
    roles: ['admin', 'guest']
  }
]
