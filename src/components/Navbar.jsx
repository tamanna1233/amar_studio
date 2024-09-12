import React, { useState } from 'react'
import Logo from '../assets/logo/Group 9 1.png'
import { BiMenuAltRight } from "react-icons/bi"
import { AiTwotoneCloseCircle } from "react-icons/ai"
import {Link} from "react-router-dom"
const Navbar = () => {
  const navItems = [
    { name: "HOME" ,
      link:"/"
    },
    { name: "ABOUT",
      link:"/About"

     },
    {name: "GALLERY",
      link:"/Gallery"
    },
    { name: "SERVICE",
      link:"Service"
     },
    { name: "CONTACT US",
      link:"Contact-us"
     }

  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=''>
      <nav className='flex items-center justify-between py-6 px-8 md:px-8 font-frenchCanon font-imprint h-[100px] '>
        
      <div className=''>
          <img src={Logo} alt="" className='w-20 sm:w-28'/>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='sm:hidden flex items-center  z-50 text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? null : <BiMenuAltRight size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex ml-auto gap-x-6 lg:gap-x-16 text-sm md:text-lg lg:text-2xl mr-[62px]'>
          {navItems.map((item) => (
             <Link key={item.link} to={item.link} >
              <ul>
             <li  className={`text-white`}>
             <button> {item.name}</button>
             </li>
             </ul>
             </Link> 
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul className={`fixed top-0 right-0 w-40 h-screen bg-[#0b090aab] flex flex-col items-start px-4 justify-start  text-left   py-4 space-y-6 text-sm  text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'hidden'} sm:hidden z-40`}>
        <button
          className='sm:hidden flex w-full px-4  items-center  z-50 text-black  justify-start '
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ?<AiTwotoneCloseCircle size={30}/>:null}
        </button>
          {navItems.map((item) => (
           
             <Link key={item.link} to={item.link}  >
              <ul>
            <li  className='hover:underline text-left'>
            <button> {item.name}</button>
           
            </li>
            </ul>
            </Link>  
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


