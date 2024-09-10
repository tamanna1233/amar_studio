import React, { useState } from 'react'
import Logo from '../assets/logo/Group 9.png'
import { BiMenuAltRight } from "react-icons/bi"
import { AiTwotoneCloseCircle } from "react-icons/ai"
import {Link} from "react-scroll"
const Navbar = () => {
  const navItems = [
    { name: "Home" },
    { name: "About" },
    {name: "Gallery"},
    { name: "Services" },
    { name: "Contact us" }

  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=''>
      <nav className='flex items-center justify-between py-4 px-28 font-frenchCanon bg-black '>
        
      <div className='flex'>
          <img src={Logo} alt="" className='w-28'/>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='sm:hidden flex items-center  z-50 text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? null : <BiMenuAltRight size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex ml-auto gap-x-[62px] text-[24px] mr-[62px]  item-center'>
          {navItems.map((item) => (
             <Link key={item.name} to={item.name}  smooth={true} duration={500}>
             <li  className={`text-white`}>
             <button> {item.name}</button>
             </li>
             </Link> 
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul className={`fixed top-0 right-0 w-2/4 h-screen bg-[#0b090aab] flex flex-col items-center justify-start py-4 space-y-6 text-2xl  text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'hidden'} sm:hidden z-40`}>
        <button
          className='sm:hidden flex w-full px-4  items-center  z-50 text-black  justify-start '
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ?<AiTwotoneCloseCircle size={30}/>:null}
        </button>
          {navItems.map((item) => (
           
             <Link key={item.name} to={item.name}  smooth={true} duration={1000}>
              <ul>
            <li  className='hover:underline'>
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


// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo/Group 9.png'
// const Navbar = () => {
 
//   const navItems= [
//     {
//       name: 'Home',
//        slug: '/',
//       },
//       {
//         name: 'Gallery',
//         slug: '/gallery'
//       },
//       {
//         name: 'Services',
//         slug: '/service'
//       },
//        {
//         name: 'About',
//         slug: '/about'
//       },
//         {
//           name: 'Contact',
//           slug: '/contact'
//         }
      
//           ]
  
//   return (
//     <>
//     <header className='text-white   py-2 flex'>
//       <nav className='flex'>
//         <div className='ml-10 px-4 '>
//           <img src={logo} alt="" className='w-24 ml-14'/>
//         </div>
//         <ul className='flex ml-auto items-center mr-4 gap-x-12'>
         
         
//           {
//           navItems.map((item) => (
//             <li key={item.slug}>
// <div className='text-white'>  
//         {/* <NavLink to={item.slug} className='flex items-center gap-x-2'>
//         {item.name}
//         </NavLink> */}
//         {item.name}
// </div>
//             </li>
//           ))
//           }
//           </ul>
//       </nav>
//     </header>
      
//     </>
//   )
// }

// export default Navbar
