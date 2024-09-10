import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import React, { lazy } from 'react'
const Home=lazy(()=> import ('./components/Home')) 
const App = () => {
  return (
    <div className='bg-black '>
             <Navbar/>
             <Outlet/>
    </div>
  )
}

export default App
