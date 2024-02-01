import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { About } from '../pages/about'
import { Contact } from '../pages/contact'
import { FAQ } from '../pages/FAQ'
import { Media } from '../pages/media'
import { Login } from '../pages/login'
import { Register } from '../pages/register'

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/media' element={<Media/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
