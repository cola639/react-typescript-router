import { FC, useState, useEffect, useCallback, useMemo } from 'react'

export interface IindexProps {}

const index: FC<IindexProps> = ({}) => {
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
        height: 500,
        lineHeight: 25,
        textAlign: 'center'
      }}
    >
      404 Not Found
    </div>
  )
}

export default index
