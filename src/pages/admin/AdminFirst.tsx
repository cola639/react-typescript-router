import { FC, useState, useEffect, useCallback, useMemo } from 'react'

export interface IAdminFirstProps {}

const AdminFirst: FC<IAdminFirstProps> = ({}) => {
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
      AdminFirst
    </div>
  )
}

export default AdminFirst
