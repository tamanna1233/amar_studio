import React, { lazy } from 'react'
const Home=lazy(()=> import ('./components/Home')) 
const App = () => {
  return (
    <div className='bg-black'>
       <Home/>
    </div>
  )
}

export default App
