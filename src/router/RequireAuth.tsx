import React from 'react'
import { Navigate } from 'react-router-dom'
import { WithChildrenProps } from './generalTypes'

export type Token = string | null

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token: Token = 'admin'

  return token ? <>{children}</> : <Navigate to="/login" />
}

export default RequireAuth
