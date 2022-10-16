import { FC, useState, useEffect, useCallback, useMemo } from 'react'

export interface IAdminThirdProps {}

const AdminThird: FC<IAdminThirdProps> = ({}) => {
  useCallback(() => {}, [])
  useMemo(() => {}, [])
  useEffect(() => {}, [])

  return (
    <div
      style={{
        border: 2,
        padding: 2,
        borderColor: 'black',
        borderStyle: 'dashed',
        margin: 5,
        width: 500,
        height: 500
      }}
    >
      {' '}
      AdminThird
    </div>
  )
}

export default AdminThird
