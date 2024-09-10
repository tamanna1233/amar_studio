import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'

import React, { lazy } from 'react'
const Home=lazy(()=> import ('./components/Home')) 
const App = () => {
  return (
    <div className='bg-black'>
             <Navbar/>
             <Home/>
             <Gallery/>
             
             <AboutUs/>
    </div>
  )
}

export default App
