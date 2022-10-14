import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutComponent from './components/Layout'
import AboutPage from './pages/About'
import Login from './pages/Login'
import TestPage from './pages/Test'

export interface IApplicationProps {}

const Application: FC<IApplicationProps> = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="about">
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
        <Route path="test" element={<TestPage />} />
        <Route path="layout" element={<LayoutComponent />}>
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Application
