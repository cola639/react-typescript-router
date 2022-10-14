import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './router'

export interface IApplicationProps {}

const Application: FC<IApplicationProps> = props => {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default Application
