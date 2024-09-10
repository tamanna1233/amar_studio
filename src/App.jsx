import Home from './components/Home'
import Navbar from './components/Navbar'

import React, { lazy } from 'react'
const Home=lazy(()=> import ('./components/Home')) 
const App = () => {
  return (
    <div className='bg-black'>
             <Navbar/>
             <Home/>
    </div>
  )
}

export default App
