import React from 'react'
import { Navigate } from 'react-router-dom'
import { WithChildrenProps } from './generalTypes'

export type Token = string | null

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  // children must pass Component
  const token: Token = 'adminFirst'

  return token ? <>{children}</> : <Navigate to="/login" />
}

export default RequireAuth
