import { FC, useState, useEffect, useCallback, useMemo } from 'react'

export interface IGuestThirdProps {}

const GuestThird: FC<IGuestThirdProps> = ({}) => {
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
      GuestThird
    </div>
  )
}

export default GuestThird
