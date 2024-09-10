<<<<<<< HEAD
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
=======
import { Outlet } from 'react-router-dom'
>>>>>>> 880e114e696e0d5364f5af7167a588f646ec57c0
import Navbar from './components/Navbar'

import React, { lazy } from 'react'
const Home=lazy(()=> import ('./components/Home')) 
const App = () => {
  return (
    <div className='bg-black '>
             <Navbar/>
<<<<<<< HEAD
             <Home/>
             <Gallery/>
             
             <AboutUs/>
=======
             <Outlet/>
>>>>>>> 880e114e696e0d5364f5af7167a588f646ec57c0
    </div>
  )
}

export default App
