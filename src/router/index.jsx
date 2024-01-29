import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
