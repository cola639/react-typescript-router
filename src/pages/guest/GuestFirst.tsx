import { FC, useState, useEffect, useCallback, useMemo } from 'react'

export interface IGuestFirstProps {}

const GuestFirst: FC<IGuestFirstProps> = ({}) => {
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
      GuestFirst
    </div>
  )
}

export default GuestFirst
