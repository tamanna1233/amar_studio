import Home from './components/Home'
import Navbar from './components/Navbar'

import React, { lazy } from 'react'
const Home=lazy(()=> import ('./components/Home')) 
const App = () => {
  return (
    <div className='bg-black'>
       <Home/>
       <Navbar/>
    </div>
  )
}

export default App
