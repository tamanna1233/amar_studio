import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navItems= [
    {
      name: 'Home',
       slug: '/',
      },
      {
        name: 'Gallery',
        slug: '/gallery'
      },
      {
        name: 'Services',
        slug: '/service'
      },
       {
        name: 'About',
        slug: '/about'
      },
        {
          name: 'Contact',
          slug: '/contact'
        }
      
          ]
  
  return (
    <>
    <header className='text-white   py-2'>
      <nav className="className='flex  '">
        <div className='ml-10 px-4 '>
          <img src="" alt="logo" />
        </div>
        <ul className='flex ml-auto items-center mr-4'>
         
         
          {
          navItems.map((item) =>item.active? (
            <li key={item.slug}>
<div className='text-white bg-gray-600'>  
        {/* <NavLink to={item.slug} className='flex items-center gap-x-2'>{item.name}</NavLink> */}
</div>
            </li>
          ):null)
          }
          <li>hello</li>
          </ul>
      </nav>
    </header>
      
    </>
  )
}

export default Navbar
